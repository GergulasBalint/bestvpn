import { Link } from 'react-router-dom';

interface RelatedLink {
  title: string;
  path: string;
  description: string;
}

const RelatedLinks: React.FC<{ currentPath: string }> = ({ currentPath }) => {
  const allLinks: RelatedLink[] = [
    {
      title: "Best VPNs",
      path: "/best-vpns",
      description: "Compare top-rated VPN services"
    },
    {
      title: "Compare Features",
      path: "/compare-features",
      description: "Detailed feature comparison of VPN services"
    },
    {
      title: "Compare Costs",
      path: "/compare-costs",
      description: "VPN pricing and value comparison"
    },
    {
      title: "Resources",
      path: "/resources",
      description: "VPN guides and tools"
    }
  ];

  const links = allLinks.filter(link => link.path !== currentPath);

  return (
    <section className="mt-16 border-t border-gray-800 pt-8">
      <h2 className="text-2xl font-bold text-cyber-blue mb-6">Related Pages</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="group bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-cyber-blue/50 transition-all duration-300"
          >
            <h3 className="text-lg font-semibold text-white group-hover:text-cyber-blue transition-colors">
              {link.title}
            </h3>
            <p className="text-sm text-gray-400 mt-2">{link.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedLinks; 