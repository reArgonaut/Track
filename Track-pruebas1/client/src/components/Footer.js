import React, { Component, Fragment } from 'react';

class Footer extends Component {
  
	render() {
    return (
      
      <div className="container-footer">
		  <div className="container p-t-40 p-b-70">
		<div className="row container">
			
				<div className="col-sm-6 col-md-4 p-t-50">  {/*  Contactanos */}
					<h4 className="txt13 m-b-33">
						Contactanos
					</h4>

					<ul className="m-b-70">
                        <li className="txt14 m-b-14">
							<i aria-hidden="true" ></i>
                             Hecho por Admino
						</li>
						<li className="txt14 m-b-14">
							<i className="fa fa-map-marker fs-16 dis-inline-block size19" aria-hidden="true"></i>
							Calle Mision San Francisco de Conchos
						</li>

						<li className="txt14 m-b-14">
							<i className="fa fa-phone fs-16 dis-inline-block size19" aria-hidden="true"></i>
							(+52) 6142533950
						</li>
                         <li className="txt14 m-b-14">
                            <i className="" aria-hidden="true"></i>
                            
                        Last-Modified: Juevez, 30 de Enero del 2020  07:31 
                        
                        </li>
                             
						<li className="txt14 m-b-14">
							<i className="fa fa-envelope fs-13 dis-inline-block size19" aria-hidden="true"></i>
							victorenano1993@gmail.com
						</li>
					</ul>

					<h4 className="txt13 m-b-32">
						Horarios
					</h4>

					<ul>
						<li className="txt14">
							06:30 AM – 11:00 PM
						</li>

						<li className="txt14">
							Todos los Dias
						</li>
					</ul>
				</div>

				<div className="col-sm-6 col-md-4 p-t-50">{/*  Ul not */}
					<h4 className="txt13 m-b-33">
						Ultimas noticias
					</h4>

					<div className="m-b-25 ">
					
						<a href="https://twitter.com/Trackabus1" className="face2">
							
						</a>
						<a href="https://twitter.com/Trackabus1" className="txt15">
							@Trackabus1
						</a>

						<p className="txt14 m-b-18">
						<a>
							Disfruta de cada minuto de tu vida!
							</a>
						</p>

						<span className="txt16">
							9 de Febrero del 2020
						</span>
					</div>

					<div>
						<a href="https://twitter.com/Trackabus1" className="face2"></a>
						<a href="https://twitter.com/Trackabus1" className="txt15">
							@Trackabus1</a>
						<p className="txt14 m-b-18">
							Choque en estacion La villita, retardo aproximado de 25 min.</p>
						<span className="txt16">
							10 de Febrero del 2020
						</span>
					</div>
				</div>

				<div className="col-sm-6 col-md-4 p-t-50"> {/*  Contactanos */}
					<h4 className="txt13 m-b-38">
						Galeria
					</h4>


				</div>
			</div>
			</div>
			<div className="footer-bg2">
				<div className="">
					<div className="flex-sb-m flex-w p-t-22 p-b-22">
						<div className="p-t-5 p-b-5">
							<a href="https://www.facebook.com/Tracka-BUS-108528197388726/" className="facebook"><i className="facebook m-l-18"></i></a>
							<a href="https://twitter.com/Trackabus1" className="twitter"><i className="twitter m-l-18"></i></a>
						</div>
					</div>
				</div>
		</div> 
		
	</div>
    
		
    
		
    
    )}
  }


export default Footer;
