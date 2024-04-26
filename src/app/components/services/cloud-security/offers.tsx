export default function CloudSecurityOffers(){
    const services = [
        {
          id: 1,
          title: 'Identity & Access Management',
          description: 'Manage identities and access controls for your organization. Manage identities and access controls for your organization.',
          imageUrl: '/path/to/logo1.svg', // Placeholder image path
        },
        {
          id: 2,
          title: 'Applications Security',
          description: 'Secure your applications to ensure safety and reliability. Manage identities and access controls for your organization.',
          imageUrl: '/path/to/logo2.svg',
        },
        {
          id: 3,
          title: 'Advanced Threat & Vulnerability Management',
          description: 'Identify, assess, and mitigate threats and vulnerabilities.',
          imageUrl: '/path/to/logo3.svg',
        },
        {
          id: 4,
          title: 'Cloud Security Services',
          description: 'Protect your cloud infrastructure and data.',
          imageUrl: '/path/to/logo4.svg',
        },
        {
          id: 5,
          title: 'Governance, Risk & Compliance',
          description: 'Ensure your operations are compliant with laws and regulations.',
          imageUrl: '/path/to/logo5.svg',
        },
        {
          id: 6,
          title: 'Managed Security Services',
          description: 'Outsource your security needs to our experts.',
          imageUrl: '/path/to/logo6.svg',
        },
    ];

    return(
    <div>
      <main className="p-8 bg-[#011c3c] py-10 clients fadeInUp">
        <h1 className="text-white text-center text-[2.18rem] font-semibold">Our Offerings</h1>
        <br/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id} className="p-4 rounded-lg fadeInUp bg-[#03162e] shadow-md">
              <div className="flex flex-col  items-center">
                {/* <image src={service.imageUrl} alt={service.title} width={100} height={100} /> */}
                <h2 className="text-[#19FFDB] text-[1.30rem] font-bold text-center">{service.title}</h2>
                
                <p className="text-[#A39D9D] text-[1.2rem] font-light mt-6">{service.description}</p>
            
                <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
    );
}