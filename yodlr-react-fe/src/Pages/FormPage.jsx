import React from "react";

/**
 * Page component that renders a Layout component that organizes a child component within it
 * @param {React.ComponentType} Layout - LayoutComponent that will wrap the child form
 * @param {React.ComponentType} childForm - FormComponent that will be nested within the Layout Component
 */
const FormPage = ({ childForm: ChildForm, Layout }) => {
    return (
        <Layout>
            <ChildForm />
        </Layout>
    );
};

export default FormPage;