import React from 'react';
import './appInfoBlock.css';

const appInfoBlock = ({
  appName = "Application name",
  dockerImageLink = "<registry>/<image>:<tag>",
  externalPort = "80",
  targetPort = "80",
  envVariables = [
    { name: "NAME1", value: "VALUE1" },
    { name: "NAME2", value: "VALUE2" },
    { name: "NAME3", value: "VALUE3" },
  ],
}) => {
  return (
    <div className="appInfoBlock">
      <h2 className="appInfoBlock-title">{appName} <span role="img" aria-label="sync">🔄</span></h2>
      <table className="appInfoBlock-info-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>External Port</th>
            <th>Target Port</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{dockerImageLink}</td>
            <td>{externalPort}</td>
            <td>{targetPort}</td>
          </tr>
        </tbody>
      </table>
      <h3>Environment variables</h3>
      <table className="appInfoBlock-env-table">
        <tbody>
          {envVariables.map((env, index) => (
            <tr key={index}>
              <td>{env.name}</td>
              <td>{env.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default appInfoBlock;
