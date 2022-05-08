import React from 'react'
import '../Styles/Solutions.css'

export default function Solutions() {
  return (
    <div className='solutions-main-container'>
      <div className='solutions-first-container'>
        <h1>What we do?</h1>
        <p>As solution providers, we analyse the client’s current setup, understand their requirement from the IT setup, try to address the current and future requirement issues and accordingly offer solutions. The areas where we provide these solutions are: Hardware Solutions Servers/ Desktops/ Laptops Infrastructure Software High availability and Load balancing solutions Messaging and collaboration solutions Database solutions E- Security Solutions Virus protection Firewalls Intrusion prevention Spam prevention solution Virtual Private Networks Encryption Email monitoring and control Web surfing management Storage & Backup Management Solutions NAS/SAN solutions Automated backup Disaster recovery Network Solutions Network Performance management Wireless LAN Network monitoring</p>
      </div>
      <div className='solutions-second-container'>
        <img className="img1" src="https://picsum.photos/200/300"/>
        <ul>
        <li className='list-heading'><h1>Infrastructure</h1></li>
          <li>Active Directory, Database Servers</li>
          <li>Desktop/ Server/ Application Virtualisation, Desktop/ Laptops/ Servers</li>
          <li>High Availability and Load balancing solutions</li>
          <li>Messaging and collaboration servers</li>
          <li>Network Performance Management</li>
          <li>Office automation applications, Software development tools</li>
          <li>Switches/ Routers, System management tools</li>
          <li>Video/ Print/ Web publishing software solutions, Wireless LAN</li>
        </ul>
      </div>
      <div className='solutions-third-container'>
        <ul>
          <li className='list-heading'><h1>security</h1></li>
          <li>2 factor authentication, Anti-spam Solutions</li>
          <li>Advance Threat Protection</li>
          <li>Anti-virus protection, Bandwidth analysis & management</li>
          <li>Data leakage prevention, Email monitoring & control</li>
          <li>Encryption, Gateway Firewalls/UTM</li>
          <li>Intrusion Detection Solutions, Intrusion Prevention Solutions</li>
          <li>PIM, SIEM, Virtual Private Networks</li>
          <li>Web surfing management</li>
        </ul>
        <img className="img1" src="https://picsum.photos/200/300"/>
      </div>
      <div className='solutions-second-container'>
        <img className="img1" src="https://picsum.photos/200/300"/>
        <ul>
          <li className='list-heading'><h1>Storage</h1></li>
          <li>Data Replication, Auto loaders</li>
          <li>Business Continuity Planning</li>
          <li>Automated desktop/ laptop backup</li>
          <li>Automated server backup</li>
          <li>Encryption, Gateway Firewalls/UTM</li>
          <li>DAT/ DLT/ Tape Library</li>
          <li>Disaster Recovery Solutions</li>
          <li>NAS/ SAN/ Unified data storage solutions</li>
        </ul>
      </div>
      <div className='solutions-third-container'>
        <ul>
          <li className='list-heading'><h1>services</h1></li>
          <li>Administration Training</li>
          <li>Consultancy</li>
          <li>Data Classification</li>
          <li>Implementation services</li>
          <li>Post implementation support</li>
          <li>Troubleshooting Support</li>

        </ul>
        <img className="img1" src="https://picsum.photos/200/300"/>
      </div>
    </div>
  )
}
