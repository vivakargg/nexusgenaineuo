import { useState } from 'react';
import { useAuth } from '@/lib/auth';
import { apiRequest, uploadFile } from '@/lib/queryClient';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { BlogPost } from '@/lib/auth';

interface BlogEditorProps {
  post?: BlogPost;
  onSave?: (post: BlogPost) => void;
}

export function BlogEditor({ post, onSave }: BlogEditorProps) {
  const { user } = useAuth();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: post?.title || '',
    content: post?.content || '',
    excerpt: post?.excerpt || '',
    tags: post?.tags?.join(', ') || '',
    status: post?.status || 'draft',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;

    try {
      setIsLoading(true);
      const file = e.target.files[0];
      const response = await uploadFile('/api/upload', file);
      const { url } = await response.json();

      // Insert image URL into content
      const imageMarkdown = `![${file.name}](${url})\\n`;
      setFormData((prev) => ({
        ...prev,
        content: prev.content + imageMarkdown,
      }));

      toast({
        title: 'Image uploaded',
        description: 'The image has been uploaded successfully.',
      });
    } catch (error) {
      toast({
        title: 'Upload failed',
        description: 'Failed to upload image. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    try {
      setIsLoading(true);
      const endpoint = post ? `/api/posts/${post.id}` : '/api/posts';
      const method = post ? 'PUT' : 'POST';

      const response = await apiRequest(method, endpoint, {
        ...formData,
        tags: formData.tags.split(',').map((tag) => tag.trim()),
        authorId: user.id,
      });

      const savedPost = await response.json();
      onSave?.(savedPost);

      toast({
        title: 'Success',
        description: `Post ${post ? 'updated' : 'created'} successfully.`,
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: `Failed to ${post ? 'update' : 'create'} post.`,
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <Input
          name="title"
          placeholder="Post title"
          value={formData.title}
          onChange={handleInputChange}
          required
        />
        
        <Textarea
          name="excerpt"
          placeholder="Brief excerpt"
          value={formData.excerpt}
          onChange={handleInputChange}
          required
          className="h-20"
        />

        <div className="flex gap-4">
          <Input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            disabled={isLoading}
          />
          <select
            name="status"
            value={formData.status}
            onChange={handleInputChange}
            className="border rounded px-3 py-2"
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </div>

        <Textarea
          name="content"
          placeholder="Write your post content in Markdown..."
          value={formData.content}
          onChange={handleInputChange}
          required
          className="h-96 font-mono"
        />

        <Input
          name="tags"
          placeholder="Tags (comma-separated)"
          value={formData.tags}
          onChange={handleInputChange}
        />
      </div>

      <div className="flex justify-end gap-4">
        <Button
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? 'Saving...' : post ? 'Update Post' : 'Create Post'}
        </Button>
      </div>
    </form>
  );
} 