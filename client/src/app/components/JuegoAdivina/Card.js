import React from 'react';
import classNames from 'classnames';
import { Container, Body, Image} from './Card2';
import './app.css';

export function Card({ classes, children, ...restProps }) {
  return (
    <Container className={classNames('card', classes)} {...restProps}>
      {children}
    </Container>
  );
}

Card.Body = function CardBody({ classes, children, ...restProps }) {
  return (
    <Body className={classNames('card__body', classes)} {...restProps}>
      {children}
    </Body>
  );
};

Card.Image = function CardImage({ src, alt, classes, ...restProps }) {
  return (
    <Image
      src={src}
      alt={alt}
      className={classNames('card__image', classes)}
      {...restProps}
    />
  );
};