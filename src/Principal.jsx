import './estilos.css'
import { BrowserRouter,Route,Routes,Link} from "react-router-dom";
function Uno(props){
    return(
        <div className="uno">
            <h2>esta es la pagina uno y tiene texto</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum quibusdam, assumenda veritatis laboriosam provident consectetur non quam incidunt eligendi suscipit voluptatibus dolor nostrum natus exercitationem reiciendis sit vel cumque quod.</p>
        </div>
    );
}
function Dos(props){
    return(
        <div className="dos">
            <h2>esta es la pagina dos y tiene 3 parrafos</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate repellendus, sit non recusandae excepturi, consectetur maxime nostrum quo voluptas iure libero culpa! Voluptatum, ipsa magni blanditiis possimus quo velit. Porro?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam minus, obcaecati maiores reprehenderit, libero voluptates perferendis, perspiciatis illo voluptatem suscipit dolor ab magni nulla error. Magni repellat cumque reprehenderit voluptatum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quae in consequuntur voluptates esse accusamus laborum quaerat ut quas quia exercitationem neque ea dolorem veniam, assumenda sequi! Voluptates, suscipit dolorum?</p>
        </div>

    );
}
function Tres(props){
    return(
        <div className="tres">
            <h2>esta es la pagina dos y tiene 3 parrafos</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate repellendus, sit non recusandae excepturi, consectetur maxime nostrum quo voluptas iure libero culpa! Voluptatum, ipsa magni blanditiis possimus quo velit. Porro?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam minus, obcaecati maiores reprehenderit, libero voluptates perferendis, perspiciatis illo voluptatem suscipit dolor ab magni nulla error. Magni repellat cumque reprehenderit voluptatum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quae in consequuntur voluptates esse accusamus laborum quaerat ut quas quia exercitationem neque ea dolorem veniam, assumenda sequi! Voluptates, suscipit dolorum?</p>
        </div>

    );
}
function Cuatro(props){
    return(
        <div className="cuatro">
            <h2>esta es la pagina dos y tiene 3 parrafos</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate repellendus, sit non recusandae excepturi, consectetur maxime nostrum quo voluptas iure libero culpa! Voluptatum, ipsa magni blanditiis possimus quo velit. Porro?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam minus, obcaecati maiores reprehenderit, libero voluptates perferendis, perspiciatis illo voluptatem suscipit dolor ab magni nulla error. Magni repellat cumque reprehenderit voluptatum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quae in consequuntur voluptates esse accusamus laborum quaerat ut quas quia exercitationem neque ea dolorem veniam, assumenda sequi! Voluptates, suscipit dolorum?</p>
        </div>

    );
}
function Cinco(props){
    return(
        <div className="cinco">
            <h2>esta es la pagina dos y tiene 555555 parrafos</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate repellendus, sit non recusandae excepturi, consectetur maxime nostrum quo voluptas iure libero culpa! Voluptatum, ipsa magni blanditiis possimus quo velit. Porro?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam minus, obcaecati maiores reprehenderit, libero voluptates perferendis, perspiciatis illo voluptatem suscipit dolor ab magni nulla error. Magni repellat cumque reprehenderit voluptatum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quae in consequuntur voluptates esse accusamus laborum quaerat ut quas quia exercitationem neque ea dolorem veniam, assumenda sequi! Voluptates, suscipit dolorum?</p>
        </div>

    );
}

function Seis(props){
    return(
        <div className="seis">
            <h2>esta es la pagina dos y tiene 3 parrafos</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate repellendus, sit non recusandae excepturi, consectetur maxime nostrum quo voluptas iure libero culpa! Voluptatum, ipsa magni blanditiis possimus quo velit. Porro?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam minus, obcaecati maiores reprehenderit, libero voluptates perferendis, perspiciatis illo voluptatem suscipit dolor ab magni nulla error. Magni repellat cumque reprehenderit voluptatum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quae in consequuntur voluptates esse accusamus laborum quaerat ut quas quia exercitationem neque ea dolorem veniam, assumenda sequi! Voluptates, suscipit dolorum?</p>
        </div>

    );
}


function Principal(props)
{
    return(
        <div className="padre">
            <h1> </h1>
            <nav>
                <ul>
                    <li><Link to="/">Python</Link></li>
                    <li><Link to="/dos">Java</Link></li>
                    <li><Link to="/tres">JavaScript</Link></li>
                    <li><Link to="/cuatro">C++</Link></li>
                    <li><Link to="/Cinco">C#</Link></li>
                    <li><Link to="/Seis">PHP</Link></li>
                    
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Uno></Uno>} ></Route>
                <Route path="/dos" element={<Dos></Dos>} ></Route>
                <Route path="/tres" element={<Tres></Tres>} ></Route>
                <Route path="/cuatro" element={<Cuatro></Cuatro>} ></Route>
                <Route path="/cinco" element={<Cinco></Cinco>} ></Route>
                <Route path="/seis" element={<Seis></Seis>} ></Route>
                
            </Routes>
            
        </div>

    );

}
export default Principal;
