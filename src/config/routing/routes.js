import views from "../../components/views"

const home_route = {
    path: '/',
    component: views.homepage,
    name: 'Home'
};

const banking_route = {
    path: '/banking',
    component: views.banking,
    name: 'Banking & Financial Services'
};

const insurance_route = {
    path: '/insurance',
    component: views.insurance,
    name: 'Insurance'
};

const healthcare_route = {
    path: '/healthcare',
    component: views.healthcare,
    name: 'Healthcare'
};

export default [banking_route, insurance_route, healthcare_route, home_route]