
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Terminal, 
  Server, 
  Database, 
  GitBranch, 
  Play, 
  Download, 
  Share2 
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CodePlatform = () => {
  return (
    <section id="code-platform" className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Advanced <span className="gradient-text">Node Code Platform</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            A complete development environment designed for Node.js developers to build, test, and deploy applications with ease.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <Tabs defaultValue="editor" className="w-full">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="editor" className="text-sm">Code Editor</TabsTrigger>
                <TabsTrigger value="deploy" className="text-sm">Deployment</TabsTrigger>
                <TabsTrigger value="monitor" className="text-sm">Monitoring</TabsTrigger>
              </TabsList>
              
              <TabsContent value="editor" className="mt-0">
                <div className="bg-card border border-border rounded-xl overflow-hidden shadow-xl">
                  <div className="p-4 bg-card/80 backdrop-blur-sm border-b border-border flex items-center justify-between">
                    <div className="flex items-center">
                      <Terminal className="h-5 w-5 text-primary mr-2" />
                      <h3 className="text-lg font-semibold">Code Editor</h3>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <Play className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="p-0">
                    <div className="bg-muted/30 p-4 overflow-x-auto">
                      <pre className="text-sm">
                        <code>
                          <span className="text-blue-400">const</span> <span className="text-yellow-400">express</span> = <span className="text-blue-400">require</span>(<span className="text-orange-400">'express'</span>);
                          <span className="text-blue-400">const</span> <span className="text-yellow-400">app</span> = <span className="text-yellow-400">express</span>();
                          <span className="text-blue-400">const</span> <span className="text-yellow-400">PORT</span> = process.env.PORT || <span className="text-purple-400">3000</span>;

                          <span className="text-green-400">// Middleware</span>
                          app.<span className="text-yellow-400">use</span>(express.<span className="text-yellow-400">json</span>());

                          <span className="text-green-400">// Routes</span>
                          app.<span className="text-yellow-400">get</span>(<span className="text-orange-400">'/'</span>, (req, res) => {"{"}
                            res.<span className="text-yellow-400">send</span>({"{"}
                              message: <span className="text-orange-400">'Welcome to NextGenAINova API'</span>
                            {"}"});
                          {"}"});

                          <span className="text-green-400">// User routes</span>
                          <span className="text-blue-400">const</span> <span className="text-yellow-400">userRoutes</span> = <span className="text-blue-400">require</span>(<span className="text-orange-400">'./routes/users'</span>);
                          app.<span className="text-yellow-400">use</span>(<span className="text-orange-400">'/api/users'</span>, userRoutes);

                          <span className="text-green-400">// Start server</span>
                          app.<span className="text-yellow-400">listen</span>(PORT, () => {"{"}
                            console.<span className="text-yellow-400">log</span>(<span className="text-orange-400">`Server running on port ${"{"}PORT{"}"}`</span>);
                          {"}"});
                        </code>
                      </pre>
                    </div>
                    
                    <div className="p-4 border-t border-border">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                          <span className="text-sm text-muted-foreground">Connected to Node.js v18.12.1</span>
                        </div>
                        <div>
                          <span className="text-xs text-muted-foreground">server.js • 20 lines</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="deploy" className="mt-0">
                <div className="bg-card border border-border rounded-xl overflow-hidden shadow-xl">
                  <div className="p-4 bg-card/80 backdrop-blur-sm border-b border-border">
                    <div className="flex items-center">
                      <Server className="h-5 w-5 text-primary mr-2" />
                      <h3 className="text-lg font-semibold">Deployment Console</h3>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-black/90 text-green-400 font-mono text-sm h-64 overflow-y-auto">
                    <p>> Initializing deployment process...</p>
                    <p>> Building application...</p>
                    <p>> Installing dependencies...</p>
                    <p className="opacity-70"># npm install --production</p>
                    <p>> Running tests...</p>
                    <p className="text-green-500"># All tests passed successfully!</p>
                    <p>> Optimizing for production...</p>
                    <p>> Uploading to cloud servers...</p>
                    <p className="text-green-500"># Deployment successful!</p>
                    <p>> Application is now live at: https://api.nextgenainova.com</p>
                    <p>> Monitoring services initialized</p>
                    <p className="animate-pulse">> _</p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="monitor" className="mt-0">
                <div className="bg-card border border-border rounded-xl overflow-hidden shadow-xl">
                  <div className="p-4 bg-card/80 backdrop-blur-sm border-b border-border">
                    <div className="flex items-center">
                      <Database className="h-5 w-5 text-primary mr-2" />
                      <h3 className="text-lg font-semibold">Performance Monitoring</h3>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-muted/30 p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground mb-1">CPU Usage</p>
                        <p className="text-2xl font-bold">12.4%</p>
                        <div className="w-full h-2 bg-muted mt-2 rounded-full overflow-hidden">
                          <div className="h-full bg-primary w-[12.4%]"></div>
                        </div>
                      </div>
                      
                      <div className="bg-muted/30 p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground mb-1">Memory Usage</p>
                        <p className="text-2xl font-bold">256MB</p>
                        <div className="w-full h-2 bg-muted mt-2 rounded-full overflow-hidden">
                          <div className="h-full bg-secondary w-[35%]"></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-muted/30 p-4 rounded-lg mb-6">
                      <div className="flex justify-between items-center mb-2">
                        <p className="text-sm text-muted-foreground">Request Volume</p>
                        <p className="text-sm font-medium">1.2k/min</p>
                      </div>
                      <div className="flex items-end h-20 space-x-1">
                        {[40, 65, 30, 85, 50, 75, 45, 90, 60, 70, 55, 80].map((height, i) => (
                          <div 
                            key={i} 
                            className="bg-primary/80 rounded-sm w-full" 
                            style={{ height: `${height}%` }}
                          ></div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-2">Active Endpoints</p>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <p className="text-sm font-mono">/api/users</p>
                          <p className="text-xs bg-green-500/20 text-green-500 px-2 py-1 rounded-full">200 OK</p>
                        </div>
                        <div className="flex justify-between items-center">
                          <p className="text-sm font-mono">/api/auth</p>
                          <p className="text-xs bg-green-500/20 text-green-500 px-2 py-1 rounded-full">200 OK</p>
                        </div>
                        <div className="flex justify-between items-center">
                          <p className="text-sm font-mono">/api/projects</p>
                          <p className="text-xs bg-green-500/20 text-green-500 px-2 py-1 rounded-full">200 OK</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <h3 className="text-2xl font-bold mb-6">
              Everything You Need in <span className="gradient-text">One Platform</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Our Node.js code platform provides a complete ecosystem for developing, testing, and deploying your applications with powerful tools and integrations.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 p-2 rounded-lg bg-primary/10">
                  <Terminal className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Intelligent Code Editor</h4>
                  <p className="text-muted-foreground">
                    Feature-rich editor with syntax highlighting, code completion, and real-time error checking specifically optimized for Node.js development.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-2 rounded-lg bg-primary/10">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">One-Click Deployment</h4>
                  <p className="text-muted-foreground">
                    Deploy your Node.js applications to our high-performance cloud infrastructure with a single click, complete with SSL, scaling, and load balancing.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-2 rounded-lg bg-primary/10">
                  <GitBranch className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Version Control Integration</h4>
                  <p className="text-muted-foreground">
                    Seamless integration with Git repositories for collaborative development, branching, and version tracking.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-2 rounded-lg bg-primary/10">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Database Management</h4>
                  <p className="text-muted-foreground">
                    Built-in support for MongoDB, PostgreSQL, and Redis with visual database management tools and automated backups.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <Button size="lg" className="mr-4">Try Code Platform</Button>
              <Button size="lg" variant="outline">View Documentation</Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CodePlatform;
