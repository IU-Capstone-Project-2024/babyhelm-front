import React from 'react'
import server from "../../assets/server.png"
import battery from "../../assets/battery.png"
import monitor from "../../assets/monitor.png"
import './whyus.css'

const Whyus = () => {
  return (
    <div className='babyhelm__why'>
      <div className='babyhelm__why_title'>
        <h1>Why to choose us</h1>
      </div>
      <div className='babyhelm__why_blocks'>
        <div className='babyhelm__why_block'>
          <img src={monitor} alt='monitor'/>
          <h1>Comprehensive monitoring</h1>
          <p>
          Stay informed with real-time metrics and performance data, seamlessly integrated with Grafana for insightful visualization.
          </p>
        </div>
        <div className='babyhelm__why_block'>
          <img src={battery} alt='battery'/>
          <h1>Easy and fast</h1>
          <p>
          Launch and manage your Kubernetes clusters with ease, minimizing setup time and maximizing productivity.
          </p>
        </div>
        <div className='babyhelm__why_block'>'
          <img src={server} alt='server'/>
          <h1>Reliable Performance</h1>
          <p>
          Depend on a high-performance platform that delivers reliable and efficient service, ensuring your applications run smoothly.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Whyus