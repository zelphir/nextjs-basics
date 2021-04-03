import React from 'react';
import { useRouter } from 'next/router';
import { Image, Box, Table, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react';

function excludeFields(key) {
  return !['address', 'website', 'image'].includes(key);
}

export default function PhoneBook({ data }) {
  const router = useRouter();
  const headers = Object.keys(data?.[0] || []).filter(excludeFields);

  if (router.query.person) {
    const person = data?.find(({ lastname }) => lastname === router.query.person?.[0]);

    if (!person) return <div>Not found</div>;

    return (
      <Box maxW="md" borderWidth="1px">
        <Image src={person.image} />
        {headers?.map((field) => (
          <div key={field}>
            {field.toUpperCase()}: <strong>{person[field]}</strong>
          </div>
        ))}
      </Box>
    );
  }

  return (
    <Table variant="striped" colorScheme="teal">
      <Thead>
        <Tr>
          {headers?.map((h) => (
            <Th key={h}>{h.toUpperCase()}</Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {data?.map((person) => (
          <Tr
            key={person.lastname}
            cursor="pointer"
            onClick={() =>
              router.push(`/phonebook-static/${person.lastname}`, undefined, { shallow: true })
            }
          >
            {Object.keys(person)
              .filter(excludeFields)
              .map((key) => (
                <Td key={key}>
                  <a>{person[key]}</a>
                </Td>
              ))}
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { person: false } }], // false param tells next.js to pre-render just the catchAll top route
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch('https://fakerapi.it/api/v1/persons');
  const { data } = await res.json();

  return {
    props: {
      person: params.person || null,
      data,
    },
  };
}

PhoneBook.layout = {
  options: {
    centerContent: false,
  },
};
