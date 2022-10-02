// импорт функции разметки
import Section from './Section/Section';
import Phonebook from './Phonebook/Phonebook';

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Section>
        <Phonebook />
      </Section>
    </div>
  );
};
