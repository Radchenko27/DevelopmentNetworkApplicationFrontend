import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Form, Spinner, Alert } from 'react-bootstrap';


interface BreadcrumbProps {
    items: { label: string; path: string }[];
}


const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
    return (
        <nav className="breadcrumb">
            {items.map((item, index) => (
                <span key={index}>
                    <Link to={item.path} className="breadcrumb-link">{item.label}</Link>
                    {index < items.length - 1 && ' > '}
                </span>
            ))}
        </nav>
    );
};

export default Breadcrumb;