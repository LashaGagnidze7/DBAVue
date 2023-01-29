<template>
    <div>

    </div>
</template>

<script>
export default {
    expose: ['publicData', 'publicMethod'],
    data() {
        return {
            publicData: 'foo',
            privateData: 'bar'
        }
    },
    methods: {
        publicMethod() {
            /* ... */
        },
        privateMethod() {
            /* ... */
        }
    }
}
</script>