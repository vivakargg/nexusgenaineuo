
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  BrainCircuit, 
  Code2, 
  Sparkles, 
  Bot, 
  FileCode, 
  Workflow 
} from "lucide-react";

const AISolutions = () => {
  return (
    <section id="ai-solutions" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Revolutionary <span className="gradient-text">AI Solutions</span> for Modern Development
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our AI-powered tools transform how developers work, making coding more efficient, intuitive, and powerful than ever before.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 p-2 rounded-lg bg-primary/10">
                  <BrainCircuit className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Intelligent Code Completion</h3>
                  <p className="text-muted-foreground">
                    Context-aware code suggestions that understand your project structure and coding patterns.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-2 rounded-lg bg-primary/10">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Automated Code Refactoring</h3>
                  <p className="text-muted-foreground">
                    Identify and fix code smells, improve performance, and enhance readability automatically.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-2 rounded-lg bg-primary/10">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Natural Language to Code</h3>
                  <p className="text-muted-foreground">
                    Describe what you want to build in plain English, and our AI generates the corresponding code.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <Button size="lg" className="mr-4">Explore AI Solutions</Button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute -z-10 w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-xl transform -rotate-6"></div>
              <div className="bg-card border border-border rounded-xl overflow-hidden shadow-xl">
                <div className="p-6 bg-card/80 backdrop-blur-sm border-b border-border">
                  <div className="flex items-center">
                    <Bot className="h-6 w-6 text-primary mr-3" />
                    <h3 className="text-xl font-semibold">AI Assistant</h3>
                  </div>
                </div>
                
                <div className="p-6 space-y-6">
                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-2">User prompt:</p>
                    <p className="font-medium">Create a REST API endpoint for user authentication with JWT</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1">
                        <FileCode className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Generated solution:</p>
                        <div className="bg-muted/30 rounded-lg p-4 overflow-x-auto">
                          <pre className="text-sm">
                            <code>
                              <span className="text-blue-400">const</span> <span className="text-yellow-400">express</span> = <span className="text-blue-400">require</span>(<span className="text-orange-400">'express'</span>);
                              <span className="text-blue-400">const</span> <span className="text-yellow-400">jwt</span> = <span className="text-blue-400">require</span>(<span className="text-orange-400">'jsonwebtoken'</span>);
                              <span className="text-blue-400">const</span> <span className="text-yellow-400">bcrypt</span> = <span className="text-blue-400">require</span>(<span className="text-orange-400">'bcrypt'</span>);
                              <span className="text-blue-400">const</span> <span className="text-yellow-400">router</span> = express.<span className="text-yellow-400">Router</span>();

                              <span className="text-green-400">// Login endpoint</span>
                              router.<span className="text-yellow-400">post</span>(<span className="text-orange-400">'/login'</span>, <span className="text-blue-400">async</span> (req, res) => {"{"}
                                <span className="text-blue-400">try</span> {"{"}
                                  <span className="text-blue-400">const</span> {"{"} email, password {"}"} = req.body;
                                  
                                  <span className="text-green-400">// Verify user credentials</span>
                                  <span className="text-blue-400">const</span> <span className="text-yellow-400">user</span> = <span className="text-blue-400">await</span> User.<span className="text-yellow-400">findOne</span>({"{"} email {"}"});
                                  
                                  <span className="text-blue-400">if</span> (!user) {"{"}
                                    <span className="text-blue-400">return</span> res.<span className="text-yellow-400">status</span>(401).<span className="text-yellow-400">json</span>({"{"}
                                      message: <span className="text-orange-400">'Invalid credentials'</span>
                                    {"}"});
                                  {"}"}
                                  
                                  <span className="text-blue-400">const</span> <span className="text-yellow-400">isValid</span> = <span className="text-blue-400">await</span> bcrypt.<span className="text-yellow-400">compare</span>(password, user.password);
                                  
                                  <span className="text-blue-400">if</span> (!isValid) {"{"}
                                    <span className="text-blue-400">return</span> res.<span className="text-yellow-400">status</span>(401).<span className="text-yellow-400">json</span>({"{"}
                                      message: <span className="text-orange-400">'Invalid credentials'</span>
                                    {"}"});
                                  {"}"}
                                  
                                  <span className="text-green-400">// Generate JWT token</span>
                                  <span className="text-blue-400">const</span> <span className="text-yellow-400">token</span> = jwt.<span className="text-yellow-400">sign</span>(
                                    {"{"} userId: user._id {"}"}, 
                                    process.env.JWT_SECRET,
                                    {"{"} expiresIn: <span className="text-orange-400">'1h'</span> {"}"}
                                  );
                                  
                                  res.<span className="text-yellow-400">json</span>({"{"} token {"}"});
                                {"}"} <span className="text-blue-400">catch</span> (error) {"{"}
                                  res.<span className="text-yellow-400">status</span>(500).<span className="text-yellow-400">json</span>({"{"}
                                    message: <span className="text-orange-400">'Server error'</span>
                                  {"}"});
                                {"}"}
                              {"}"});
                              
                              <span className="text-blue-400">module</span>.<span className="text-yellow-400">exports</span> = router;
                            </code>
                          </pre>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center mr-3 mt-1">
                        <Workflow className="h-4 w-4 text-secondary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Implementation steps:</p>
                        <ol className="list-decimal list-inside space-y-2 text-sm pl-2">
                          <li>Install required packages: express, jsonwebtoken, bcrypt</li>
                          <li>Create a User model with email and password fields</li>
                          <li>Set up environment variable for JWT_SECRET</li>
                          <li>Implement the login endpoint as shown above</li>
                          <li>Create middleware to verify JWT tokens for protected routes</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AISolutions;
