class Dictionary
        constructor: ->
                @dataStore = []

        add: (key, value) ->
                @dataStore[key] = value

        find: (key) -> @dataStore[key]

        remove: (key) ->
                delete @dataStore[key]

        showAll: ->
                for key in Object.keys(@dataStore).sort()
                        console.log "#{key} -> #{@dataStore[key]}"

        count: ->
                n = 0
                for key in Object.keys(@dataStore)
                        n += 1
                n

        clear: ->
                for key in Object.keys @dataStore
                        delete @dataStore[key]
