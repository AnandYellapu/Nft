import React from "react";

import CommonSection from "../components/ui/Common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";

import "../styles/wallet.css";

const wallet__data = [
  {
    title: "Bitcoin",
    desc: "Bitcoin is decentalized digital assest which is discoverd by group of people with name Satoshi Nakomoto.",
    icon: "ri-bit-coin-line",
  },

  {
    title: "Coinbase",
    desc: "Coinbase is a secure online platform for buying, selling, transferring, and storing digital currency.",
    icon: "ri-coin-line",
  },

  {
    title: "Metamask",
    desc: "MetaMask is a software cryptocurrency wallet used to interact with the Ethereum blockchain. It allows users to access their Ethereum wallet through a browser extension or mobile app.",
    icon: "ri-money-cny-circle-line",
  },

  {
    title: "Ethereum",
    desc: "Ethereum is a decentralized, open-source blockchain with smart contract functionality. Ether(ETH) sign: is the native cryptocurrency of the platform. Among cryptocurrencies, ether is second only to bitcoin in market capitalization.",
    icon: "ri-bit-coin-line",
  },
];

const Wallet = () => {
  return (
    <>
      <CommonSection title="Connect Wallet" />
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <div className="w-50 m-auto">
                <h3 className="text-light">Connect your wallet</h3>
                <p>
                  
                </p>
              </div>
            </Col>

            {wallet__data.map((item, index) => (
              <Col lg="3" md="4" sm="6" key={index} className="mb-4">
                <div className="wallet__item">
                  <span>
                    <i class={item.icon}></i>
                  </span>
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Wallet;