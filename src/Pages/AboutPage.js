import React from 'react'
import ImageSection from '../Components/ImageSection';
import ServicesSection from '../Components/ServicesSection';
import SkillsSection from '../Components/SkillsSection'
import Title from '../Components/Title'
import Avatar from '../image/Avatar1.jpg'

function AboutPage(){
    return(
        <div>
            <Title title={"about Me"} span={"about Me"}/>
            <ImageSection/>
            <Title title={"My Skills"} span={"My Skills"} />
            <div className="skillsContainer">
            <SkillsSection skill={'Javascript'} progress={'60%'} width={'60%'}/>
            <SkillsSection skill={'Typescript'} progress={'60%'} width={'60%'}/>
            <SkillsSection skill={'Reactjs'} progress={'60%'} width={'60%'}/>
            <SkillsSection skill={'Nodejs'} progress={'60%'} width={'60%'}/>
            <SkillsSection skill={'Corejava'} progress={'60%'} width={'60%'}/>
            <SkillsSection skill={'c++'} progress={'60%'} width={'60%'}/>
            <SkillsSection skill={'python'} progress={'60%'} width={'60%'}/>
            <SkillsSection skill={'UX/UI design'} progress={'60%'} width={'60%'}/>
            </div>
              
            <Title title={"Services"} span={"Services"} />
              <div className="servives-container">
                  <ServicesSection  image={Avatar} title={'Web design'} text={'Desicribe your work'}/>
                  <ServicesSection  image={Avatar} title={'Web design'} text={'Desicribe your work'}/>
                  <ServicesSection  image={Avatar} title={'Web design'} text={'Desicribe your work'}/>
              </div>

        </div>
    )
}

export default AboutPage;