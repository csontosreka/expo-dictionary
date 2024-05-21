import { Check, ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import { useMemo, useState } from 'react'
import type { FontSizeTokens, SelectProps } from 'tamagui'
import { Adapt, Label, Select, Sheet, XStack, YStack, getFontSize, useTheme } from 'tamagui'
import { LinearGradient } from 'tamagui/linear-gradient'

interface CustomSelectProps extends SelectProps {
  placeholder: string
}

export function SelectComponent(props: CustomSelectProps) {
  //const [val, setVal] = useState(props.defaultValue)
  const theme = useTheme()

  const items = useMemo(() => [
    { id: 'eng', name: 'English' },
    { id: 'hun', name: 'Hungarian' },
    { id: 'ger', name: 'German' },
  ], []);

  return (
    <Select value={props.defaultValue} onValueChange={props.onValueChange} disablePreventBodyScroll {...props}>
      <Select.Trigger backgroundColor={theme.color6.get()} width={"40%"} maxWidth={300} iconAfter={ChevronDown}>
        <Select.Value placeholder={props.placeholder} />
      </Select.Trigger>

      <Adapt when="sm" platform="touch">
        <Sheet
          native={!!props.native}
          modal
          dismissOnSnapToBottom
          animationConfig={{
            type: 'spring',
            damping: 20,
            mass: 1.2,
            stiffness: 250,
          }}
        >
          <Sheet.Frame>
            <Sheet.ScrollView>
              <Adapt.Contents />
            </Sheet.ScrollView>
          </Sheet.Frame>
          <Sheet.Overlay
            animation="lazy"
            enterStyle={{ opacity: 0 }}
            exitStyle={{ opacity: 0 }}
          />
        </Sheet>
      </Adapt>

      <Select.Content zIndex={200000}>
        <Select.ScrollUpButton
          alignItems="center"
          justifyContent="center"
          position="relative"
          width="100%"
          height="$3"
        >
          <YStack zIndex={10}>
            <ChevronUp size={20} />
          </YStack>
          <LinearGradient
            start={[0, 0]}
            end={[0, 1]}
            fullscreen
            colors={[theme.color10.get(), 'transparent']}
            borderRadius="$4"
          />
        </Select.ScrollUpButton>

        <Select.Viewport
          // to do animations:
          // animation="quick"
          // animateOnly={['transform', 'opacity']}
          // enterStyle={{ o: 0, y: -10 }}
          // exitStyle={{ o: 0, y: 10 }}
          minWidth={200}
        >
          <Select.Group>
            <Select.Label backgroundColor={theme.color3.get()}>Languages</Select.Label>
            {items.map((item, i) => (
              <Select.Item
                index={i}
                key={item.name}
                value={item.id}
                backgroundColor={theme.color6.get()}
              >
                <Select.ItemText>{item.name}</Select.ItemText>
                <Select.ItemIndicator marginLeft="auto">
                  <Check size={16} />
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Viewport>

        <Select.ScrollDownButton
          alignItems="center"
          justifyContent="center"
          position="relative"
          width="100%"
          height="$3"
        >
          <YStack zIndex={10}>
            <ChevronDown size={20} />
          </YStack>
          <LinearGradient
            start={[0, 0]}
            end={[0, 1]}
            fullscreen
            colors={['transparent', theme.color10.get()]}
            borderRadius="$4"
          />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select>
  )
}