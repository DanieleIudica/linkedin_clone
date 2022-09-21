import { NavDropdown } from "react-bootstrap";

const FeedFooter = () => {
  return (
    <div className="text-center feedFooter my-4">
      <p className="d-flex justify-content-center">
        <a href="" className="me-3 nav-link">
          Informazioni
        </a>
        <a href="" className="nav-link" >
          Accessibilità
        </a>
      </p>
      <p className="d-flex justify-content-center">
      <a href="" className="me-3 nav-link">
          Centro Assistenza
        </a>
      
        <NavDropdown
              id="nav-dropdown-dark-example"
              title="Privacy e condizioni"
              menuVariant="light"
            >
              <NavDropdown.Item href="#action/3.1">Informativa sulla privacy</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Contratto di licenza
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Informativa sui Cookie</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Informativa sul copyright
              </NavDropdown.Item>
            </NavDropdown>
      </p>
      <p>
        <a href="" className="nav-link">Opzioni per gli annunci pubblicitari</a>
      </p>
      <p className="d-flex justify-content-center">
        <a href="" className="me-3 nav-link">Pubblicità</a>
        <NavDropdown
              id="nav-dropdown-dark-example"
              title="Servizi alle aziende"
              menuVariant="light"
            >
              <NavDropdown.Item href="#action/3.1">Informativa sulla privacy</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Contratto di licenza
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Informativa sui Cookie</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Informativa sul copyright
              </NavDropdown.Item>
            </NavDropdown>
      </p>
      <p className="d-flex justify-content-center">
        <a href="" className="me-3 nav-link">Scarica l'app Linkedin</a>
        <a href="" className="nav-link">Altro</a>
      </p>
      <p> <img src="./icons/LI-Logo.png" width="60px" style={{marginTop:"-3px"}}></img> LinkedIn Corporation © 2022</p>
    </div>
  );
};

export default FeedFooter;
