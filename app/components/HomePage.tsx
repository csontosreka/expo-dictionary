import { View, Text, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native'
import React from 'react'
import { Button, Input, XStack, YStack, useTheme } from 'tamagui'
import { Ionicons } from '@expo/vector-icons'
import { SelectComponent } from './SelectComponent'
import { getResults } from '@/services/api'
import { colorTokens } from '@tamagui/themes'
import SearchResults from './SearchResults'

const HomePage = () => {
    const theme = useTheme()

    const [query, setQuery] = React.useState<string>('');
    const [fromLanguage, setFromLanguage] = React.useState<string>('');
    const [toLanguage, setToLanguage] = React.useState<string>('');
    const [searchResults, setSearchResults] = React.useState<any | undefined>(undefined);

    const handleChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setQuery(e.nativeEvent.text);
    }

    const handleSearch = async () => {
        const results = await getResults(fromLanguage, toLanguage, query);
        setSearchResults(results);
    }

    console.log(fromLanguage, toLanguage, searchResults);
    return (
        <YStack flex={1}>
            <XStack justifyContent='center' alignItems='center' space='$2' m='$4'>
                <SelectComponent placeholder="From" onValueChange={setFromLanguage} value={fromLanguage} />
                <Ionicons name='arrow-forward' size={24} color={theme.color6.get()} />
                <SelectComponent placeholder="To" onValueChange={setToLanguage} value={toLanguage} />
            </XStack>
            <XStack justifyContent='center' alignItems='center' space='$2' m='$4'>
                <Input
                    width={"80%"}
                    maxWidth={600}
                    placeholder="Start typing a word or phrase"
                    onChange={handleChange}
                    value={query}
                    backgroundColor={theme.color11.get()}
                    borderColor={theme.color6.get()}
                    placeholderTextColor={theme.color6.get()}
                    color={theme.color7.get()}
                    hoverStyle={{ borderColor: theme.color6.get() }}
                />
                <Button
                    onPress={handleSearch}
                    size={"$4"}
                    padding={8}
                    backgroundColor={theme.color6.get()}
                    icon={<Ionicons name='search' size={24} color='#fff' />}
                >
                </Button>
            </XStack>
            {
                searchResults &&
                <SearchResults results={searchResults.result} />
            }
        </YStack>
    )
}

export default HomePage