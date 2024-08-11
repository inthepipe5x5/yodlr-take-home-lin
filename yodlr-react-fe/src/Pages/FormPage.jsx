/* eslint-disable react/prop-types */
import React from "react";
import FormLayout from "../Layouts/FormLayout";

/**
 * Page component that renders a Layout component that organizes a child component within it
 * @param {React.ComponentType} Layout - LayoutComponent that will wrap the child form
 * @param {React.ComponentType} childForm - FormComponent that will be nested within the Layout Component
 */
const FormPage = ({ childForm: ChildForm, Layout=FormLayout}) => {
    return (
        <Layout>
            <ChildForm />
        </Layout>
    );
};

export default FormPage;