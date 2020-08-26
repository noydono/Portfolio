
			import * as THREE from '../libs/three.module.js';
			import { OrbitControls } from '../libs/OrbitControls.js';
			

			
			var camera, scene, renderer;

			

			init();
			animate();
			
			function init() {
			
				scene = new THREE.Scene();

				setCamera()
				light ()
				material()
				loader()
				setUpRenderer()
			
				window.addEventListener( 'resize', onWindowResize, false );
			
			}


			function setCamera() {
				camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 100 );
				camera.position.x = 1;
				camera.position.z = 10;
				camera.position.y = 0;
			}


			function light (){

				var light = new THREE.DirectionalLight( 0xff0000 );
				var helper = new THREE.DirectionalLightHelper( light, 5 );
				scene.add( helper, light );

			}

			
			function loader(){

				var loader = new THREE.ObjectLoader()
				loader.load('./models/roomOBJ.obj', function ( object ) {
					console.log('coucou');			
				});
				
			};


			function material(){

				var geometry = new THREE.BoxGeometry();
				var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
				var cube = new THREE.Mesh( geometry, material );
				scene.add( cube );

			}


			function onWindowResize() {
			
				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();
				renderer.setSize( window.innerWidth, window.innerHeight );
			
			}
				
			
			function animate() {
			
				requestAnimationFrame( animate );
				render();
			
			}

			function setUpRenderer(){

				renderer = new THREE.WebGLRenderer();
				renderer.physicallyCorrectLights = true;
				renderer.setSize( window.innerWidth, window.innerHeight );
				document.body.appendChild( renderer.domElement );
				var controls = new OrbitControls( camera, renderer.domElement );
				controls.update();
			}

			function render() {
				
				renderer.render( scene, camera );
			
			}
			