import React from 'react'
import { Hero } from '../../containers'
import { FeatureCard } from '../../components'
import leftcard from "../../assets/leftcard.png"
import rightcard from "../../assets/rightcard.png"
import './projects.css'

const Projects = () => {
  return (
    <>   
        <Hero />
        <div className="feature-cards">
            <FeatureCard
                title="Create Applications"
                description="Easily create your application by providing your Docker image. Our platform handles the cluster configuration and deployment for you."
                image={leftcard}
            />
            <FeatureCard
                title="Collaborate"
                description="Add team members to your project and assign roles to streamline collaboration and manage your application's development efficiently."
                image={rightcard}
            />
        </div>
    </>
  )
}

export default Projects