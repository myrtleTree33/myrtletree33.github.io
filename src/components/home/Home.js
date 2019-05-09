import React from "react";
import PropTypes from "prop-types";
import { BrowserView, MobileView } from "react-device-detect";
import TextLink from "./TextLInk";
import TypedText from "./TypedText";

const Home = ({ props }) => {
  const linkSpacePadding = "1.2em";

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <div
        style={{
          maxWidth: "700px"
        }}
      >
        <h1
          style={{
            fontSize: "1.8em"
          }}
        >
          <BrowserView>
            <TypedText
              strings={["Hello! My name is Joel Tong."]}
              style={{
                fontSize: ".8em"
              }}
            />
          </BrowserView>
          <MobileView>Hello! My name is Joel Tong.</MobileView>
        </h1>

        <div>
          <p>
            I love exploring ideas and hail from the aviation and travel
            industry.
          </p>

          <p>
            Having coded since age 10, my passion lies in bringing ideas
            together with code. My experience includes being part of Facebook
            App Academy @ Facebook HQ Menlo Park, where I worked on the MIT App
            Inventor 2 open-source codebase for course credit by Facebook, to
            build a game creator, and winning second at the Singapore Airlines
            App Challenge Hackathon 2015.
          </p>

          <p>
            I am keenly passionate about pro-bono work, connecting with people,
            tinkering with new ideas, travel and history.
          </p>

          <p>Let's have a chat if you're keen! (:</p>
          <div
            style={{
              marginTop: "5.2rem"
            }}
          >
            <span
              style={{
                margin: `0 ${linkSpacePadding} 0 0`
              }}
            >
              <TextLink
                text="Facebook"
                to="https://www.facebook.com/joeltong"
              />
            </span>
            |
            <span
              style={{
                margin: `0 ${linkSpacePadding}`
              }}
            >
              <TextLink
                text="LinkedIn"
                to="https://www.linkedin.com/in/jhtong/"
              />
            </span>
            |
            <span
              style={{
                margin: `0 ${linkSpacePadding}`
              }}
            >
              <TextLink text="GitHub" to="https://github.com/myrtleTree33" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
