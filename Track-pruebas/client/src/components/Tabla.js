import React,{Component}  from "react";


class Tabla extends Component{
  render() {
    return (
      <div className="container-prof">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">Tabla de tiempos</h1>
          </div>
          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td>Estacion</td>
                <td>Direccion</td>
                <td>Tiempo espera</td>
              </tr>
              <tr>
                <td>E1</td>
              </tr>
              <tr>
                <td>E2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}


export default Tabla;