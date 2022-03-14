import React from "react";
import '../styles/Characters.scss'
import { Card, Button, Row, Col, Container, CardGroup } from "react-bootstrap";

const Characters = ({ characters, favorites, handleClick }) => {
  return (
    <Container className="Characters">
      <Row>
        {characters.map((character) => (
          <Col xs="auto" md={4} lg={3} xl={3.5} classname="myCol" >
            <Card className="item" key={character.id}>
              <Card.Img variant="top" src={character.image} />
              <Card.Body>
                <Card.Title>{character.name}</Card.Title>
                <Card.Text>
                  Gender: {character.gender} ({character.status})
                </Card.Text>
                <Card.Text>Species: {character.species}</Card.Text>
                <Card.Text>Origin: {character.origin.name}</Card.Text>
              
              </Card.Body>
              <Card.Footer>
              {
                  //***** BUTTON *****
                  favorites.favoritesState.find(
                    (item) => item.id === character.id
                  ) ? (
                    <Button
                      size="sm"
                      variant="outline-success"
                      onClick={() =>
                        handleClick("REMOVE_FROM_FAVORITES", character.id)
                      }
                    >
                      Remove from favorites
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      variant="success"
                      onClick={() => handleClick("ADD_TO_FAVORITES", character)}
                    >
                      Add to favorites
                    </Button>
                  )
                }
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Characters;
