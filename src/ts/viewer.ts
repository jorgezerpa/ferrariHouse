import * as THREE from 'three'
import { gsap } from 'gsap';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { ferrariModels } from '../constants/ferraries';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

let renderer:any, scene:any;

export function initViewer(container:HTMLElement, itemId:string){
        document.body.appendChild(closeViewer(container))


        const model = ferrariModels[itemId]
        renderer = new THREE.WebGLRenderer({alpha:true});
        renderer.setClearColor(0x000000, 0)
        renderer.setSize( container.clientWidth, container.clientHeight ); 
        container.appendChild( renderer.domElement );

        let camera = new THREE.PerspectiveCamera( 75, container.clientWidth / container.clientHeight, .0001, 30 );
        const cameraInitialPosition = new THREE.Vector3(model.views.initial.position[0],model.views.initial.position[1],model.views.initial.position[2])
        const cameraInitialRotation = new THREE.Vector3(model.views.initial.rotation[0],model.views.initial.rotation[1],model.views.initial.rotation[2])
        camera.position.set(cameraInitialPosition.x, cameraInitialPosition.y, cameraInitialPosition.z)
        camera.rotation.set(cameraInitialRotation.x, cameraInitialRotation.y, cameraInitialRotation.z)

        scene = new THREE.Scene(); 

        const controls = new OrbitControls(camera, renderer.domElement)

        // LIGHTS
        const ambientalLight = new THREE.AmbientLight(0xFFFFFF, .9)
        scene.add(ambientalLight)
        const directionalLight = new THREE.DirectionalLight(0xFFFFFF, .9)
        scene.add(directionalLight)



        
        // -----------------------
        
        let loader = new GLTFLoader();
        loader.load(
            model.modelPath,
            function (gltf) {
              scene.add(gltf.scene);
              window.addEventListener('click', ()=>{
                console.log("position--> ",`[${ camera.position.x.toFixed(3)},${ camera.position.y.toFixed(3)},${ camera.position.z.toFixed(3)}]`)
                console.log("rotation--> ",`[${ camera.rotation.x.toFixed(3)},${ camera.rotation.y.toFixed(3)},${ camera.rotation.z.toFixed(3)}]`)
              })
            },
            function (xhr) {
                console.log((xhr.loaded / xhr.total * 100) + '% loaded');
            },
            function (error) {
                console.log('An error happened', error);
            }
          );        
        
        // -----------------------




        function animate() {
        renderer.render( scene, camera );
        }
        renderer.setAnimationLoop(animate);


        window.addEventListener('resize', function () {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
        });

}

export function closeViewer(container:HTMLElement){
    const closeButton = document.createElement('div')
    closeButton.style.position="fixed"
    closeButton.style.top="20px"
    closeButton.style.right="20px"
    closeButton.style.zIndex="50"
    closeButton.style.color="white"
    closeButton.style.fontSize="1rem"
    closeButton.style.fontWeight="bold"
    closeButton.innerHTML = "close"

    closeButton.addEventListener('click', ()=>{
        container.removeChild(renderer.domElement);
        scene.traverse((obj:any) => {
            if (obj.isMesh) {
                obj.geometry.dispose();
                obj.material.dispose();
                scene.remove(obj);
        }
        });
        document.body.removeChild(container)


        gsap.to('.hero', { opacity:1, duration:1 })
    })
    return closeButton
}   