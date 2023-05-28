function backCount(number:number){
  for(let i = number; i>0; i-- ){
    console.log(i)
  }
  console.log('Despegamos!')
}











// import * as THREE from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/all';
// import { ScrollToPlugin } from 'gsap/all';
// import './style.css'
// import './styles/commons.css'
// import './styles/hero.css'
// import './styles/wheels.css'

// let renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight ); 
// document.body.appendChild( renderer.domElement );

// let camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
// camera.position.z = 5;


// let scene = new THREE.Scene(); 

// const controls = new OrbitControls(camera, renderer.domElement)

// // LIGHTS
// const ambientalLight = new THREE.AmbientLight(0xFFFFFF, .9)
// scene.add(ambientalLight)
// const directionalLight = new THREE.DirectionalLight(0xFFFFFF, .9)
// scene.add(directionalLight)
// // -----------------------
//   // importing 3d scene
// let loader = new GLTFLoader();




// loader.load(
//   '/3dAssets/ferrariBarcheta/scene.gltf',
//   function (gltf) {
//     // gltf.scene.traverse(function(child) {
//     //   if (child instanceof THREE.Mesh) {
//     //     child.material.wireframe = true;
//     //   }
//     // })
//     scene.add(gltf.scene);
//   },
//   function (xhr) {
//       console.log((xhr.loaded / xhr.total * 100) + '% loaded');
//   },
//   function (error) {
//       console.log('An error happened', error);
//   }
// );

// // -----------------------

// function animate() {
//     renderer.render( scene, camera );
// }
// renderer.setAnimationLoop(animate);



// //-----------------
// window.addEventListener('resize', function () {
//   // Update the camera aspect ratio and renderer size
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// });



// const positions = {
//   initial: {
//     position: new THREE.Vector3(0.000, 0.000,5.000),
//     rotation: new THREE.Vector3(-0.000, 0.000,0.000),
//   },
//   wheel: {
//     position: new THREE.Vector3(-1.877, 0.685,-1.216),
//     rotation: new THREE.Vector3(-0.686, -1.215,-0.655),
//   },
//   bodywork: {
//     position: new THREE.Vector3(1.579, 1.605,2.452),
//     rotation: new THREE.Vector3(-0.715, 0.673,0.496),
//   },
//   upholstery: {
//     position: new THREE.Vector3(0.943, 1.402,-0.248),
//     rotation: new THREE.Vector3(-1.256, 0.755,1.127),
//   },
//   dashboard: {
//     position: new THREE.Vector3(0.424, 1.060,-0.535),
//     rotation: new THREE.Vector3(-2.893, 0.014,3.138),
//   },
//   aerodinamics: {
//     position: new THREE.Vector3(-1.861, 4.001,2.351),
//     rotation: new THREE.Vector3(-1.039, -0.381,-0.565),
//   },
//   cta: {
//     position: new THREE.Vector3(-1.393, 1.041,-3.048),
//     rotation: new THREE.Vector3(-3.016, -0.423,-3.090),
//   },
// }

// const autotimeline = () => {
//   gsap.registerPlugin(ScrollTrigger)
//   const ferrariTimeline = gsap.timeline({
//     paused:true
//   });
  
//   ferrariTimeline.to(camera.position, { 
//     x:positions.initial.position.x,
//     y:positions.initial.position.y,
//     z:positions.initial.position.z,
//     duration:2
//   })
//   .to(camera.rotation, {
//     x:positions.initial.rotation.x,
//     y:positions.initial.rotation.y,
//     z:positions.initial.rotation.z,
//     duration:2
//   }, 0)
  
//   .to(camera.position, { 
//     x:positions.wheel.position.x,
//     y:positions.wheel.position.y,
//     z:positions.wheel.position.z,
//     duration:2
//   }, 2)
//   .to(camera.rotation, {
//     x:positions.wheel.rotation.x,
//     y:positions.wheel.rotation.y,
//     z:positions.wheel.rotation.z,
//     duration:2
//   }, 2)
  
//   .to(camera.position, { 
//     x:positions.bodywork.position.x,
//     y:positions.bodywork.position.y,
//     z:positions.bodywork.position.z,
//     duration:2
//   }, 4)
//   .to(camera.rotation, {
//     x:positions.bodywork.rotation.x,
//     y:positions.bodywork.rotation.y,
//     z:positions.bodywork.rotation.z,
//     duration:2
//   }, 4)
  
//   .to(camera.position, { 
//     x:positions.upholstery.position.x,
//     y:positions.upholstery.position.y,
//     z:positions.upholstery.position.z,
//   duration:2
//   }, 6)
//   .to(camera.rotation, {
//     x:positions.upholstery.rotation.x,
//     y:positions.upholstery.rotation.y,
//     z:positions.upholstery.rotation.z,
//     duration:2
//   }, 6)
  
//   .to(camera.position, { 
//     x:positions.dashboard.position.x,
//     y:positions.dashboard.position.y,
//     z:positions.dashboard.position.z,
//     duration:2
//   }, 8)
//   .to(camera.rotation, {
//     x:positions.dashboard.rotation.x,
//     y:positions.dashboard.rotation.y,
//     z:positions.dashboard.rotation.z,
//     duration:2
//   }, 8)
  
//   .to(camera.position, { 
//     x:positions.aerodinamics.position.x,
//     y:positions.aerodinamics.position.y,
//     z:positions.aerodinamics.position.z,
//     duration:2
//   }, 10)
//   .to(camera.rotation, {
//     x:positions.aerodinamics.rotation.x,
//     y:positions.aerodinamics.rotation.y,
//     z:positions.aerodinamics.rotation.z,
//     duration:2
//   }, 10)
  
//   .to(camera.position, { 
//     x:positions.cta.position.x,
//     y:positions.cta.position.y,
//     z:positions.cta.position.z,
//     duration:2
//   }, 12)
//   .to(camera.rotation, {
//     x:positions.cta.rotation.x,
//     y:positions.cta.rotation.y,
//     z:positions.cta.rotation.z, duration:2
//   }, 12);
// }


// // ------------------------
//   // SCROLL ANIMATION 
// // ------------------------
// gsap.registerPlugin(ScrollTrigger)
// gsap.registerPlugin(ScrollToPlugin)

// // to pass into the scrollTo plugin on the tween
// const scrollTargets = [
//   '.hero',
//   '.wheel',
//   '.bodywork',
//   '.upholstery',
//   '.dashboard',
//   '.aerodinamic',
//   '.cta',
// ]

// //Where the animations will be executed
// const triggers = [
//     'wheelSpacer',
//     'bodyworkSpacer',
//     'upholsterySpacer',
//     'dashboardSpacer',
//     'aerodinamicSpacer',
//     'ctaSpacer',
// ]

// const triggersSettings:any = {
//   wheelSpacer:{ 
//     scrollTrigger:{
//       trigger: '.wheelSpacer',
//       start: 'top bottom',
//       end: 'bottom top',
//       scrub:true
//     },
//     cameraPositionTween: { 
//       x:positions.wheel.position.x,
//       y:positions.wheel.position.y,
//       z:positions.wheel.position.z,
//     },
//     cameraRotationTween: {
//       x:positions.wheel.rotation.x,
//       y:positions.wheel.rotation.y,
//       z:positions.wheel.rotation.z,
//     }
//   },
//   bodyworkSpacer:{ 
//     scrollTrigger:{
//       trigger: '.bodyworkSpacer',
//       start: 'top bottom',
//       end: 'bottom top',
//       scrub:true
//     },
//     cameraPositionTween: { 
//       x:positions.bodywork.position.x,
//       y:positions.bodywork.position.y,
//       z:positions.bodywork.position.z,
//     },
//     cameraRotationTween: {
//       x:positions.bodywork.rotation.x,
//       y:positions.bodywork.rotation.y,
//       z:positions.bodywork.rotation.z,
//     }
//   },
//   upholsterySpacer:{ 
//     scrollTrigger:{
//       trigger: '.upholsterySpacer',
//       start: 'top bottom',
//       end: 'bottom top',
//       scrub:true
//     },
//     cameraPositionTween: { 
//       x:positions.upholstery.position.x,
//       y:positions.upholstery.position.y,
//       z:positions.upholstery.position.z,
//     },
//     cameraRotationTween: {
//       x:positions.upholstery.rotation.x,
//       y:positions.upholstery.rotation.y,
//       z:positions.upholstery.rotation.z,
//     }
//   },
//   dashboardSpacer:{ 
//     scrollTrigger:{
//       trigger: '.dashboardSpacer',
//       start: 'top bottom',
//       end: 'bottom top',
//       scrub:true
//     },
//     cameraPositionTween: { 
//       x:positions.dashboard.position.x,
//       y:positions.dashboard.position.y,
//       z:positions.dashboard.position.z,
//     },
//     cameraRotationTween: {
//       x:positions.dashboard.rotation.x,
//       y:positions.dashboard.rotation.y,
//       z:positions.dashboard.rotation.z,
//     }
//   },
//   aerodinamicSpacer:{ 
//     scrollTrigger:{
//       trigger: '.aerodinamicsSpacer',
//       start: 'top bottom',
//       end: 'bottom top',
//       scrub:true
//     },
//     cameraPositionTween: { 
//       x:positions.aerodinamics.position.x,
//       y:positions.aerodinamics.position.y,
//       z:positions.aerodinamics.position.z,
//     },
//     cameraRotationTween: {
//       x:positions.aerodinamics.rotation.x,
//       y:positions.aerodinamics.rotation.y,
//       z:positions.aerodinamics.rotation.z,
//     }
//   },
//   ctaSpacer:{ 
//     scrollTrigger:{
//       trigger: '.ctaSpacer',
//       start: 'top bottom',
//       end: 'bottom top',
//       scrub:true
//     },
//     cameraPositionTween: { 
//       x:positions.cta.position.x,
//       y:positions.cta.position.y,
//       z:positions.cta.position.z,
//     },
//     cameraRotationTween: {
//       x:positions.cta.rotation.x,
//       y:positions.cta.rotation.y,
//       z:positions.cta.rotation.z,
//     }
//   },
// }


// //creating triggers and autoscroll
// let currentTarget=0;
// const scrollAnimations = triggers.map((trigger)=>{
//   const timeline = gsap.timeline({
//       scrollTrigger:{
//         ...triggersSettings[trigger].scrollTrigger,
//         onEnter:(e)=>{
//           document.body.style.overflow = 'hidden';
//           gsap.to(window, { 
//             duration:2, 
//             scrollTo:scrollTargets[currentTarget+1], 
//             onComplete:()=>{
//               currentTarget=currentTarget+1
//               document.body.style.overflow = 'auto';
//             } 
//           })
//         },
//         onEnterBack:(e)=>{
//           document.body.style.overflow = 'hidden';
//           gsap.to(window, { 
//             duration:2, 
//             scrollTo:scrollTargets[currentTarget-1], 
//             onComplete:()=>{
//               currentTarget=currentTarget-1
//               document.body.style.overflow = 'auto';
//             } 
//           })
//         },
//         // disable:true
//       },
//     })
//   timeline.to(camera.position,triggersSettings[trigger].cameraPositionTween , 0)
//   .to(camera.rotation, triggersSettings[trigger].cameraRotationTween, 0)
//   return timeline
// })




