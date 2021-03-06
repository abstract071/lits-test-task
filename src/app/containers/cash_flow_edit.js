import React from 'react';
import { reduxForm } from 'redux-form';

import CashFlowForm from './cash_flow_form';
import validate from '../validation/cash_flow_form_validation';

const CashFlowEdit = props =>
    <CashFlowForm
        { ...props }
        mode="edit"
        cashFlowItemId={+props.match.params.id} />;

export default reduxForm({
    validate,
    form: 'cashFlowEdit'
})(CashFlowEdit);