import React from "react";
import Recipe from "./Recipe";
import {Col, Container, Row} from "react-bootstrap";


function RecipeGridList({recipeList, ingredientList, isBiggerSpacing, isSmallDetail}) {
    return (
        <Container className="d-flex justify-content-center">
            <Row className="justify-content-center no-gutters">
                {recipeList.map((recipe) => (
                    <Col xs={12} sm={6} md={6} lg={4} key={recipe.id}
                         className={isBiggerSpacing ? "card-bigger-spacing" : "card-spacing"}>
                        <Recipe recipe={recipe} ingredientList={ingredientList} isSmallDetail={isSmallDetail}/>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default RecipeGridList;