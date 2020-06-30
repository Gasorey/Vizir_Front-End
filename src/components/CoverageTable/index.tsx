import React, { useState, useEffect } from 'react';
import { Container, Table } from './styles';
import ICoverage from '../../dtos/ICoverage';
import api from '../../services/api';
import formatValue from '../../utils/FormatValue';

const CoverageTable: React.FC = () => {
  const [coverages, setCoverages] = useState<ICoverage[]>([]);

  useEffect(() => {
    async function loadCoverage():Promise<void> {
      await api.get<ICoverage[]>('/coverage').then((response) => {
        const loadedCoverage = response.data;

        setCoverages(loadedCoverage);
      });
    }
    loadCoverage();
  }, []);

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>Origem</th>
            <th>Destino</th>
            <th>Preço por minuto</th>
          </tr>
        </thead>
        <tbody>
          {coverages.map((coverage) => (
            <tr key={coverage.id}>
              <td>{coverage.origin }</td>
              <td>{coverage.destination}</td>
              <td>{formatValue(coverage.price) }</td>
            </tr>
          ))}
        </tbody>

      </Table>
    </Container>
  );
};

export default CoverageTable;
