import React from "react";
import Item from "./Item";
import {Col, Container, Row} from "react-bootstrap";


function ItemGridList({recipeList, ingredientList, isBiggerSpacing, isSmallDetail, onEdit}) {
    return (
        <Container>
            <Row>
                {recipeList.map((recipe) => (
                    <Col
                        xs={12}
                        sm={6}
                        md={6}
                        lg={4}
                        key={recipe.id}
                        className={isBiggerSpacing ? "card-bigger-spacing" : "card-spacing"}
                    >
                        <Item
                            recipe={recipe}
                            ingredientList={ingredientList}
                            isSmallDetail={isSmallDetail}
                            onEdit={onEdit} // Předání funkce onEdit
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default ItemGridList;