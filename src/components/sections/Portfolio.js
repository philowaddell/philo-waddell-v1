import React from "react";
import Grid from "@mui/material/Grid";
import DisplayCard from "../portfolio/DisplayCard";
import { useStaticQuery, graphql } from "gatsby";
import "../../styles/GlobalStyles.css";
import { Box } from "@mui/system";

const Portfolio = () => {

  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          id
          frontmatter {
            title
            link
            image {
            childImageSharp {
              gatsbyImageData
              }
            }
            image_alt
          }
          body
        }
      }
    }
  `);

  return (
    <section id="portfolio">
      <Box height="100%" display="flex">
        <Grid
          container
          flexGrow={1}
          justifyContent="center"
          alignItems="center"
          columnSpacing={5}
        >
          {data.allMdx.nodes.map((node) => (
            <Grid item key={node.id}>
              <DisplayCard 
                title={node.frontmatter.title} 
                link={node.frontmatter.link}
                image={node.frontmatter.image}
                imageAlt={node.frontmatter.image_alt}
                body={node.body} 
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </section>
  );
};

export default Portfolio;
