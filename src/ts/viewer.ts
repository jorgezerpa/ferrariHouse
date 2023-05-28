import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { ferrariModels } from '../constants/ferraries';

export function initViewer(container:HTMLElement, itemId:string){
    console.log(ferrariModels[itemId])
        let renderer = new THREE.WebGLRenderer({alpha:true});
        renderer.setClearColor(0x000000, 0)
        renderer.setSize( container.clientWidth, container.clientHeight ); 
        container.appendChild( renderer.domElement );

        let camera = new THREE.PerspectiveCamera( 75, container.clientWidth / container.clientHeight, 0.1, 1000 );
        camera.position.z = 5;

        let scene = new THREE.Scene(); 

        const controls = new OrbitControls(camera, renderer.domElement)

        const cubeGeo = new THREE.BoxGeometry(1,1,1)
        const cubeMat = new THREE.MeshBasicMaterial({color:0xFF0000})
        const cube = new THREE.Mesh(cubeGeo, cubeMat)

        scene.add(cube)


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