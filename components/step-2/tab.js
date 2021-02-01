import { Button, Wrap, WrapItem } from '@chakra-ui/react'
import { SUPPORT_LANG } from '../../constants'

function TabButton({ selectedName, name, language, onChange, children }) {
  const isActive = selectedName === name
  return (
    <Button
      size="sm"
      color={isActive ? 'black' : null}
      bg={isActive ? 'white' : null}
      _hover={{
        color: isActive ? 'black' : null
      }}
      variant={isActive ? 'solid' : 'outline'}
      onClick={() => onChange(name, language)}
    >
      {children}
    </Button>
  )
}

export default function Tab({ name, onChange }) {
  return (
    <Wrap spacing={2} justify="center">
      {Object.keys(SUPPORT_LANG).map((lang) => {
        const SELECTED_LANG = SUPPORT_LANG[lang]
        return (
          <WrapItem key={lang}>
            <TabButton
              selectedName={name}
              name={SELECTED_LANG.name}
              language={SELECTED_LANG.language}
              onChange={onChange}
            >
              {SELECTED_LANG.name}
            </TabButton>
          </WrapItem>
        )
      })}
    </Wrap>
  )
}
