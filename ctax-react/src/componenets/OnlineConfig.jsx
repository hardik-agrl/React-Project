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
    companyName: localStorage.getItem("companyName") || '',
    customerKey: localStorage.getItem("licenseKey") || '',
    licenceValidationStatus: 'Invalid',
  });

  const [sqlConfig, setSqlConfig] = useState({
    username: '',
    password: '',
    apiName: '',
  });

  

  const bindSummary = async (type) => {
    try {
      const response = await axios.get("http://localhost:5000/api/online");
      const fetchedData = response.data;
  
      if (!fetchedData.length) {
        console.error("No data found in the database");
        return;
      }
  
      const data = fetchedData[0]; 
      
      console.log("Fetched Data:", data); 

      if (type === "SQL_API") {
        setSqlConfig({
          username: data.username, 
          password: data.password,
          apiName: data.apiName,
        });
      } else if (type === "sas") {
        setSasConfig((prevSasConfig) => ({
          ...prevSasConfig,
          clientId: data.client_id, 
          clientSecret: data.client_secret,
          username: data.username,
          password: data.password,
          organizationId: data.organizationId,
          secretId: data.secretId,
          scope: data.scope,
          accessTokenUrl: data.access_token_url,
          apiName: data.api_name,
          apiNameGlEntries: data.api_name_gl_entries,
          
          licenceValidationStatus: "Valid", 
        }));
      }
    } catch (error) {
      console.error("Error fetching configuration summary:", error);
    }
  };
  

  useEffect(() => {
    bindSummary(configType);
  }, [configType]);

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
      secret_id: sasConfig.secretId,
      scope: sasConfig.scope,
      access_token_url: sasConfig.accessTokenUrl,
      api_name: sasConfig.apiName,
      api_name_gl_entries: sasConfig.apiNameGlEntries,
      
      config_from_type: 'sas',
    };

    try {
      const response = await axios.post('http://localhost:5000/api/InsertOnlineConfig', config);
      alert(response.data);
      bindSummary('sas');
    } catch (error) {
      console.error('Error submitting SAS configuration:', error);
    }
  };

  
  const handleValidateLicence = async () => {
    
  };

  return (
    <div className="row card-box">
      <div className="col-sm-12">
        <Card>
          <Card.Header>
            <Row>
              <Col sm={12}>
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