import React from "react";
import { Accordion, Container } from "react-bootstrap";
import StyleFrequentQuestion from "./FrequentQuestion.module.css";

const FrequentQuestion = () => {
  return (
    <div style={{ width: "100%" }}>
      <Container>
        <h1 className="section_header">Frequent Questions</h1>
        <div className={StyleFrequentQuestion.FrequentQuestion_section}>
          <Accordion
            className={StyleFrequentQuestion.accordion_container}
            defaultActiveKey="0"
          >
            <Accordion.Item eventKey="0">
              <Accordion.Header>Why you were stock dress ?</Accordion.Header>
              <Accordion.Body>
                We are best seller in the world. we selling our dresses in our
                stock. Our Communities is the best for stocking dresses. That's
                why we are comfortly selling the dress. And our communities
                fastly growing up . This is why we are stock the dress.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Why your dress so good than others ?
              </Accordion.Header>
              <Accordion.Body>
                Our Dress good for our stuff working so hard they are so good
                stuff . And I appreciate it. And Our mangement and service
                system so secure and good. Our dresses special for our clothes.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <form className={StyleFrequentQuestion.quotes_form}>
            <h3>Quotes Form</h3>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="number" placeholder="Phone" />
            <button className="button">Submit</button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default FrequentQuestion;
