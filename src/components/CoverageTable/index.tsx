import React, { useState, useEffect } from 'react';
import { Container, Table } from './styles';
import ICoverage from '../../dtos/ICoverage';
import api from '../../services/api';

const CoverageTable: React.FC = () => {
  const [coverages, setCoverages] = useState<ICoverage[]>([]);

  useEffect(() => {
    async function loadCoverage():Promise<void> {
      await api.get('/coverage').then((response) => {
        const loadedCoverage = response.data;

        setCoverages(loadedCoverage);
      });
    }
    loadCoverage();
  }, []);

  return (
    <Container>
      <Table>
        <tr>
          <th>Origem</th>
          <th>Destino</th>
          <th>Preço por minuto</th>
        </tr>
        <tr>
          <td>{coverages && coverages.filter((coverage) => coverage.origin)}</td>
        </tr>
        <tr>
          <td>{coverages && coverages.filter((coverage) => coverage.destination)}</td>
        </tr>
        <tr>
          <td>{coverages && coverages.filter((coverage) => coverage.price)}</td>
        </tr>

      </Table>
    </Container>
  );
};

export default CoverageTable;
