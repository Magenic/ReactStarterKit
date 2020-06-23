import * as React from 'react';
import {Field, Form, Formik, FormikProps} from 'formik';
import {NavLink, SolidButton} from 'lib/ui/core';
import paths from 'providers/RouterProvider/paths';
import {UserModel} from 'data/user';
import {ApprovedAny} from 'lib/@types';
import {useUserService} from 'data/user/services';
import {FetchResponse} from 'lib/hooks/useFetch';

export type CreateUserFormValues = Omit<UserModel, 'uuid'>;
export interface CreateUserFormProps {
  onSuccess?: (response: FetchResponse<UserModel>) => void;
}

export const CreateUserForm = ({onSuccess}: CreateUserFormProps) => {
  const {createUser} = useUserService();

  const initialValue: CreateUserFormValues = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    role: 'external',
  };
  return (
    <div>
      <h1>Create User</h1>
      <Formik
        initialValues={initialValue}
        onSubmit={(values, actions) => {
          const newUser = {
            ...values,
            uuid: Math.floor(Math.random() * 100 + 100).toString(),
          } as UserModel;

          createUser.dispatch(
            {data: newUser},
            {
              onSuccess: response => {
                actions.setSubmitting(false);
                onSuccess && onSuccess(response);
              },
            }
          );
        }}
      >
        {(formikProps: FormikProps<ApprovedAny>) => (
          <Form>
            <div>
              <label htmlFor="firstName">First Name</label>
              <br />
              <Field
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First Name"
              />
            </div>
            <br />
            <div>
              <label htmlFor="lastName">Last Name</label>
              <br />
              <Field
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
              />
            </div>
            <br />
            <div>
              <label htmlFor="username">Username</label>
              <br />
              <Field
                type="text"
                name="username"
                id="username"
                placeholder="Username"
              />
            </div>
            <br />
            <div>
              <label htmlFor="email">Email</label>
              <br />
              <Field type="email" name="email" id="email" placeholder="Email" />
            </div>
            <br />
            <div>
              <label htmlFor="role">Role</label>
              <br />
              <Field as="select" name="role" id="role">
                <option value="" disabled>
                  Role
                </option>
                <option value="internal">Internal</option>
                <option value="external">External</option>
              </Field>
            </div>
            <br />
            <div>
              <label htmlFor="contracts">Contracts</label>
              <br />
              <Field as="select" name="contracts" id="contracts" multiple>
                <option value="" disabled>
                  Select Contracts
                </option>
                <option value="h4569">H4569</option>
                <option value="h1234">H1234</option>
                <option value="h3523">H3523</option>
                <option value="h0095">H0095</option>
                <option value="h3485">H3485</option>
              </Field>
            </div>
            <br />
            <br />
            <SolidButton type="submit" disabled={formikProps.isSubmitting}>
              Add New User
            </SolidButton>
            <NavLink to={paths.users}>Cancel</NavLink>
            {formikProps.isSubmitting && <p>Is Submitting</p>}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateUserForm;
