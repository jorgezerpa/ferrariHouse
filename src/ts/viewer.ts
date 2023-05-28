import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { ferrariModels } from '../constants/ferraries';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'


export function initViewer(container:HTMLElement, itemId:string){
        let renderer = new THREE.WebGLRenderer({alpha:true});
        renderer.setClearColor(0x000000, 0)
        renderer.setSize( container.clientWidth, container.clientHeight ); 
        container.appendChild( renderer.domElement );

        let camera = new THREE.PerspectiveCamera( 75, container.clientWidth / container.clientHeight, 0.1, 1000 );
        camera.position.z = 5;

        let scene = new THREE.Scene(); 

        const controls = new OrbitControls(camera, renderer.domElement)

        // LIGHTS
        const ambientalLight = new THREE.AmbientLight(0xFFFFFF, .9)
        scene.add(ambientalLight)
        const directionalLight = new THREE.DirectionalLight(0xFFFFFF, .9)
        scene.add(directionalLight)



        
        // -----------------------
        
        let loader = new GLTFLoader();
        loader.load(
            ferrariModels[itemId].modelPath,
            function (gltf) {
              scene.add(gltf.scene);
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