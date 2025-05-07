import { useState, useEffect } from 'react';
import { useRoute, useLocation } from 'wouter';
import { useAuth } from '@/lib/auth';
import { apiRequest } from '@/lib/queryClient';
import { BlogPost } from '@/lib/auth';
import { BlogEditor } from '@/components/blog/BlogEditor';

const BlogEditorPage = () => {
  const [, params] = useRoute('/blog/edit/:id');
  const [, setLocation] = useLocation();
  const { user } = useAuth();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setLocation('/login');
      return;
    }

    if (params?.id) {
      fetchPost(params.id);
    } else {
      setIsLoading(false);
    }
  }, [user, params?.id, setLocation]);

  const fetchPost = async (id: string) => {
    try {
      const response = await apiRequest('GET', `/api/posts/${id}`);
      const data = await response.json();
      setPost(data);
    } catch (error) {
      console.error('Failed to fetch post:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = (savedPost: BlogPost) => {
    setLocation(`/blog/${savedPost.slug}`);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-blue-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-blue-900 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-12">
          {post ? 'Edit Post' : 'Create New Post'}
        </h1>
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
          <BlogEditor post={post || undefined} onSave={handleSave} />
        </div>
      </div>
    </div>
  );
};

export default BlogEditorPage; 