/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const { siteConfig, language = "" } = this.props;
    const { baseUrl, docsUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
    const langPart = `${language ? `${language}/` : ""}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <div className="title">
          <h1>Typescript + GraphQL = RecifeJs</h1>
          <p>
            Use the powers of typescript to generate GraphQL APIs. You no longer
            have to worry about declaring Types and Resolvers.
          </p>
          <div className="buttons">
            <Button href={docUrl("installation.html")}>Getting Started</Button>
            <Button href="https://github.com/recifejs/recife">Github</Button>
          </div>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = "" } = this.props;
    const { baseUrl } = siteConfig;

    const Block = props => (
      <Container
        padding={["bottom", "top"]}
        id={props.id}
        background={props.background}
      >
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const StartProject = () => (
      <Container padding={["bottom", "top"]} background="light">
        <div className="gridBlock startProject">
          <div className="blockElement twoByGridBlock imageAlignSide">
            <div className="blockImage">
              <img src={`${baseUrl}img/undraw_code_review.svg`} />
            </div>
            <div className="blockContent">
              <h2>Start a project</h2>
              <p>1. Create new project</p>
              <img className="code" src={`${baseUrl}img/code2.png`} />
              <p>2. Start the project</p>
              <img className="code" src={`${baseUrl}img/code3.png`} />
            </div>
          </div>
        </div>
      </Container>
    );

    const About = () => (
      <Container padding={["bottom", "top"]} background="light">
        <div className="gridBlock about">
          <div className="blockElement twoByGridBlock imageAlignSide">
            <div className="blockContent">
              <h2>
                What is the <strong>RecifeJs</strong>?
              </h2>
              <ul>
                <li>
                  RecifeJs is a powerful MVC Framework for GraphQL in NodeJS.
                </li>
                <li>
                  RecifeJs compiles typescript and creates graphql schemas in a
                  simple and objective way.
                </li>
                <li>
                  RecifeJs has a whole structure ready to start a GraphQL API.
                </li>
                <li>Security in creating graphql schemas</li>
              </ul>
            </div>
            <div className="blockImage">
              <img src={`${baseUrl}img/code1.png`} />
            </div>
          </div>
        </div>
      </Container>
    );

    const Features = () => (
      <Container
        className="firstContainer"
        padding={["bottom", "top"]}
        background="dark"
      >
        <div className="gridBlock features">
          <div className="blockElement fourByGridBlock imageAlignSide">
            <div className="blockContent">
              <h1>01</h1>
              <h2>
                Flexible <br />
                Structure
              </h2>
              <p>
                A flexible and configurable structure that allows you to use the
                maximum typescript resources.
              </p>
            </div>
            <div className="blockContent">
              <h1>02</h1>
              <h2>
                Hot
                <br />
                Loader
              </h2>
              <p>
                Check for code updates in real time. There is no need to restart
                the service to see what's new in GraphQL playground.
              </p>
            </div>
            <div className="blockContent">
              <h1>03</h1>
              <h2>
                Command-line
                <br />
                Interface(CLI)
              </h2>
              <p>
                Create projects, controllers, models, validators and much more,
                through a simple and friendly interface.
              </p>
            </div>
          </div>
        </div>
      </Container>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : "") + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl("users.html")}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <About />
          <Features />
          <StartProject />
          {/* <Showcase /> */}
        </div>
      </div>
    );
  }
}

module.exports = Index;
