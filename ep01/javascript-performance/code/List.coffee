class List
        constructor: ->
                @dataStore = []
                @pos = 0

        append: (element) ->
                @dataStore.push(element)

        remove: (element) ->
                foundAt = @find(element)
                if foundAt > -1
                        @dataStore.splice(foundAt, 1)
                        return true
                false

        insert: (element, after) ->
                insertPos = @find(after)
                if insertPos > -1
                        @dataStore.splice(insertPos + 1, 0, element)
                        return true
                false

        clear: ->
                @dataStore.length = 0

        front: ->
                @pos = 0

        end: ->
                @pos = @length() - 1

        prev: ->
                if @pos >= 0 then --@pos

        next: ->
                if @pos < @length() then ++@pos

        moveTo: (position) ->
                @pos = position

        find: (element) -> @dataStore.indexOf(element)
        contains: (element) -> @dataStore[@pos]
        length: -> @dataStore.length
        currPos: -> @pos
        toString: -> "#{@dataStore}"
