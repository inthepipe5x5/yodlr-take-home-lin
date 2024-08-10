import React from "react";

/**
 * Page component that renders a Layout component that organizes a child component within it
 * @param {React.ComponentType} Layout - LayoutComponent that will wrap the child form
 * @param {React.ComponentType} content - ContentComponent that will be nested within the Layout Component
 */
const LandingPage = ({ content: Content, Layout }) => {
    return (
        <Layout>
            <Content />
        </Layout>
    );
};

export default LandingPage;