import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Button, Row, Col, Card, Badge } from 'react-bootstrap';

const OnlineConfig = () => {
  const [configType, setConfigType] = useState('sas');
  const [sasConfig, setSasConfig] = useState({
    clientId: '',
    clientSecret: '',
    username: '',
    password: '',
    organizationId: '',
    secretId: '',
    scope: '',
    accessTokenUrl: '',
    apiName: '',
    apiNameGlEntries: '',
    companyName: import.meta.env.VITE_COMPANY_NAME || '',
    customerKey: import.meta.env.VITE_LISENCE_KEY || '',
    licenceValidationStatus: 'Invalid',
  });

  const [sqlConfig, setSqlConfig] = useState({
    username: '',
    password: '',
    apiName: '',
  });

  useEffect(() => {
    bindSummary(configType);
  }, [configType]);

  const bindSummary = async (type) => {
    try {
      const response = await axios.get(`/home/GetCtax_ConfigurationSummary?config_type=${type}`);
      const data = response.data;

      if (type === 'SQL_API') {
        setSqlConfig({
          username: data.USER_NAME,
          password: data.PASSWORD,
          apiName: data.API_NAME,
        });
      } else if (type === 'SAS_AZURE') {
        setSasConfig({
          ...sasConfig,
          clientId: data.CLIENT_ID,
          clientSecret: data.CLIENT_SECRET,
          username: data.USER_NAME,
          password: data.PASSWORD,
          organizationId: data.ORGANIZATION_ID,
          secretId: data.SECRAT_ID,
          scope: data.SCOPE,
          accessTokenUrl: data.ACCESS_TOKEN_URL,
          apiName: data.API_NAME,
          apiNameGlEntries: data.API_NAME_GLENTRIES,
          customerKey: data.CUSTOMER_KEY,
          companyName: data.COMPANY_NAME,
          licenceValidationStatus: data.LICENCE_VALIDATION_STATUS,
        });
      }
    } catch (error) {
      console.error('Error fetching configuration summary:', error);
    }
  };

  const handleConfigTypeChange = (e) => {
    setConfigType(e.target.value);
  };

  const handleSasSubmit = async () => {
    const config = {
      config_from_id: sasConfig.config_from_id || 0,
      client_id: sasConfig.clientId,
      client_secret: sasConfig.clientSecret,
      user_name: sasConfig.username,
      password: sasConfig.password,
      organization_id: sasConfig.organizationId,
      secrat_id: sasConfig.secretId,
      scope: sasConfig.scope,
      access_token_url: sasConfig.accessTokenUrl,
      api_name: sasConfig.apiName,
      api_name_gl_entries: sasConfig.apiNameGlEntries,
      company_name: sasConfig.companyName,
      customer_key: sasConfig.customerKey,
      config_from_type: 'SAS_AZURE',
    };

    try {
      const response = await axios.post('/Home/InsertCtax_ConfigurationForm', config);
      alert(response.data);
      bindSummary('SAS_AZURE');
    } catch (error) {
      console.error('Error submitting SAS configuration:', error);
    }
  };

  const handleSqlSubmit = async () => {
    const config = {
      config_from_id: sqlConfig.config_from_id || 0,
      user_name: sqlConfig.username,
      password: sqlConfig.password,
      api_name: sqlConfig.apiName,
      config_from_type: 'SQL_API',
    };

    try {
      const response = await axios.post('/Home/InsertCtax_ConfigurationForm', config);
      alert(response.data);
      bindSummary('SQL_API');
    } catch (error) {
      console.error('Error submitting SQL configuration:', error);
    }
  };

  const handleValidateLicence = async () => {
    try {
      const response = await axios.post('/Home/InsertCtaxSassAzureValidate', {
        id: sasConfig.config_from_id || 0,
        licence_key: sasConfig.customerKey,
      });
      alert(response.data);
      bindSummary('SAS_AZURE');
    } catch (error) {
      console.error('Error validating licence:', error);
    }
  };

  return (
    <div className="row card-box">
      <div className="col-sm-12">
        <Card>
          <Card.Header>
            <Row>
              <Col sm={11}>
                <Form.Check
                  type="radio"
                  label="SASS Azure"
                  name="radioInline"
                  value="sas"
                  checked={configType === 'sas'}
                  onChange={handleConfigTypeChange}
                  inline
                />
              </Col>
              <Col sm={1}>
                <a href="#">
                  <i className="fa fa-info" data-toggle="tooltip" data-html="true"
                    title="<div id='my-tip' className='tip-content hidden'><h2 className='text-white'>Auth 2.0</h2><p>Client ID, Client Secret, Scope, Access Token URL, Api Name is Mandatory</p></div>"></i>
                </a>
              </Col>
            </Row>
          </Card.Header>
          <Card.Body>
            {configType === 'sas' ? (
              <Form>
                <h4 className="mb-3 header-title">SAAS Azure Configuration</h4>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm={3}>Client ID</Form.Label>
                  <Col sm={9}>
                    <Form.Control
                      type="text"
                      value={sasConfig.clientId}
                      onChange={(e) => setSasConfig({ ...sasConfig, clientId: e.target.value })}
                      placeholder="Client ID key"
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm={3}>Client Secret</Form.Label>
                  <Col sm={9}>
                    <Form.Control
                      type="text"
                      value={sasConfig.clientSecret}
                      onChange={(e) => setSasConfig({ ...sasConfig, clientSecret: e.target.value })}
                      placeholder="Client secret key"
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm={3}>Scope</Form.Label>
                  <Col sm={9}>
                    <Form.Control
                      type="text"
                      value={sasConfig.scope}
                      onChange={(e) => setSasConfig({ ...sasConfig, scope: e.target.value })}
                      placeholder="Scope"
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm={3}>Access Token URL</Form.Label>
                  <Col sm={9}>
                    <Form.Control
                      type="text"
                      value={sasConfig.accessTokenUrl}
                      onChange={(e) => setSasConfig({ ...sasConfig, accessTokenUrl: e.target.value })}
                      placeholder="Access Token URL"
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm={3}>Api Name (Chart of Accounts)</Form.Label>
                  <Col sm={9}>
                    <Form.Control
                      type="text"
                      value={sasConfig.apiName}
                      onChange={(e) => setSasConfig({ ...sasConfig, apiName: e.target.value })}
                      placeholder="Api Name"
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm={3}>Api Name (General Ledger Entries)</Form.Label>
                  <Col sm={9}>
                    <Form.Control
                      type="text"
                      value={sasConfig.apiNameGlEntries}
                      onChange={(e) => setSasConfig({ ...sasConfig, apiNameGlEntries: e.target.value })}
                      placeholder="Api Name"
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm={3}>Company Name</Form.Label>
                  <Col sm={9}>
                    <Form.Control
                      type="text"
                      value={sasConfig.companyName}
                      disabled
                      placeholder="Company Name"
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm={3}>Licence Key</Form.Label>
                  <Col sm={9}>
                    <Form.Control
                      type="text"
                      value={sasConfig.customerKey}
                      disabled
                      placeholder="Licence Key"
                    />
                    <Row>
                      <Col sm={10} className="text-right">
                        <label>Status: <Badge variant={sasConfig.licenceValidationStatus === 'License Validated' ? 'success' : 'secondary'}>
                          {sasConfig.licenceValidationStatus}
                        </Badge></label>
                      </Col>
                      <Col sm={2} className="text-right">
                        <Button variant="danger" size="sm" onClick={handleValidateLicence}>Validate</Button>
                      </Col>
                    </Row>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-0 justify-content-end">
                  <Col sm={9}>
                    <Button variant="info" onClick={handleSasSubmit}>Submit</Button>
                  </Col>
                </Form.Group>
              </Form>
            ) : (
              <Form>
                <h4 className="mb-3 header-title">SQL Configuration</h4>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm={3}>Username</Form.Label>
                  <Col sm={9}>
                    <Form.Control
                      type="text"
                      value={sqlConfig.username}
                      onChange={(e) => setSqlConfig({ ...sqlConfig, username: e.target.value })}
                      placeholder="SQL Username"
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm={3}>Password</Form.Label>
                  <Col sm={9}>
                    <Form.Control
                      type="password"
                      value={sqlConfig.password}
                      onChange={(e) => setSqlConfig({ ...sqlConfig, password: e.target.value })}
                      placeholder="SQL Password"
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm={3}>Api Name</Form.Label>
                  <Col sm={9}>
                    <Form.Control
                      type="text"
                      value={sqlConfig.apiName}
                      onChange={(e) => setSqlConfig({ ...sqlConfig, apiName: e.target.value })}
                      placeholder="Api Name"
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-0 justify-content-end">
                  <Col sm={9}>
                    <Button variant="info" onClick={handleSqlSubmit}>Submit</Button>
                  </Col>
                </Form.Group>
              </Form>
            )}
          </Card.Body>
        </Card>
      </div>
     </div>
  );
};

export default OnlineConfig;