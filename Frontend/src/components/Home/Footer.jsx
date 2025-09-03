import { 
    Github, 
    Linkedin, 
    Twitter, 
    Instagram, 
    ChevronRight,
    ExternalLink 
  } from 'lucide-react';
  
const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    const socialLinks = [
      {
        icon: <Github size={20} />,
        name: "GitHub",
        url: ""
      },
      {
        icon: <Linkedin size={20} />,
        name: "LinkedIn",
        url: ""
      },
      {
        icon: <Twitter size={20} />,
        name: "Twitter",
        url: "#"
      },
      {
        icon: <Instagram size={20} />,
        name: "Instagram",
        url: ""
      }
    ];
    
    const footerLinks = [
      {
        title: "Services",
        links: [
          { name: "Frontend Development", url: "#services" },
          { name: "Backend Development", url: "#services" },
          { name: "Full Stack Solutions", url: "#services" },
          { name: "AI & ML Integration", url: "#services" }
        ]
      }
    ];
    
    return (
      <footer className="bg-gray-50 dark:bg-gray-900 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Nitesh</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
                Freelance developer specializing in modern web technologies, AI integration, 
                and creating exceptional digital experiences for businesses worldwide.
              </p>
              
              <div className="flex items-center gap-4">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className="p-2 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-full shadow-sm hover:shadow transition-all"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
            
            {footerLinks.map((column, idx) => (
              <div key={idx}>
                <h4 className="font-bold text-gray-900 dark:text-white mb-4">{column.title}</h4>
                <ul className="space-y-2">
                  {column.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a 
                        href={link.url} 
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center group"
                      >
                        <ChevronRight size={14} className="mr-1 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-200 dark:border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} All rights reserved.
            </p>
            
            <div className="flex items-center">
              <a 
                href="#top"
                className="inline-flex items-center bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-2 rounded-lg text-sm transition-colors"
              >
                Back to top
                <ExternalLink size={14} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  };

  export default Footer;