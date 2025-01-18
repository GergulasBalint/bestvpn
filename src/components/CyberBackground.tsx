const CyberBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated Grid */}
      <div 
        className="absolute inset-0 bg-[url('/images/cyber-grid.svg')] opacity-20 bg-repeat animate-pulse-slow"
        style={{ backgroundSize: '50px 50px' }}
      ></div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-gradient-to-r from-cyber-blue/20 to-purple-500/20 rounded-full blur-[150px] animate-pulse-slow"></div>
      <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-l from-purple-500/20 to-cyber-blue/20 rounded-full blur-[150px] animate-pulse-slow delay-700"></div>
      <div className="absolute -bottom-1/4 left-1/4 w-1/2 h-1/2 bg-gradient-to-t from-green-500/20 to-cyber-blue/20 rounded-full blur-[150px] animate-pulse-slow delay-1000"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        <div className="absolute w-2 h-2 bg-cyber-blue rounded-full top-1/4 left-1/4 animate-float"></div>
        <div className="absolute w-2 h-2 bg-purple-500 rounded-full top-1/3 right-1/4 animate-float-delayed"></div>
        <div className="absolute w-2 h-2 bg-green-500 rounded-full bottom-1/4 left-1/3 animate-float-slow"></div>
      </div>
      
      {/* Scan Line */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-blue/5 to-transparent animate-scan"></div>
      
      {/* Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_49%,rgba(0,246,255,0.1)_50%,transparent_51%)] bg-[length:50px_50px]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_49%,rgba(0,246,255,0.1)_50%,transparent_51%)] bg-[length:50px_50px]"></div>
    </div>
  );
};

export default CyberBackground; 