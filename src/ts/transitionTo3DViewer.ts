import gsap from 'gsap'
import { initViewer } from './viewer'

const items = document.querySelectorAll('.hero__carList-item img')

items.forEach(item=>{
    item.addEventListener('click', (e)=>{
        //create element
        const viwerContainer = document.createElement("div")
        const selectedProps = (e.target as HTMLElement).getBoundingClientRect();
        viwerContainer.classList.add('viewerContainer')
        viwerContainer.style.position = "fixed"
        viwerContainer.style.top = `${selectedProps.top}px`
        viwerContainer.style.left = `${selectedProps.left}px`
        viwerContainer.style.width = `${selectedProps.width}px`
        viwerContainer.style.height = `${selectedProps.height}px`
        viwerContainer.style.display = `flex`
        const selectedClone = (e.target as HTMLElement).cloneNode(true)
        viwerContainer.appendChild(selectedClone)

        //animation
        gsap.to('.hero', { opacity:0 })
        gsap.to(viwerContainer, { 
            top:'50%', left:'50%', transform: "translate(-50%, -50%)", duration:2, delay:2,
            onComplete:()=>{
                viwerContainer.removeChild(selectedClone)
                viwerContainer.style.display = 'block'
            }
        })
        gsap.to(viwerContainer, { 
            width:'100vw', height:'100vh', duration:.5, delay:4,
            onComplete:()=>{
                initViewer()
            }
        })
        
        document.body.appendChild(viwerContainer)
    })
})