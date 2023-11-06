import { Ploc } from "@clean-frontend-vue/core";

import { onMounted, onUnmounted, readonly, type Ref, type DeepReadonly, ref } from "vue";

export function usePlocState<S>(ploc: Ploc<S>): DeepReadonly<Ref<S>> {
    const state = ref(ploc.state) as Ref<S>;

    const stateSubscription = (newState: S) => {
        state.value = newState;
    };

    onMounted(() => {
        ploc.subscribe(stateSubscription);
    });

    onUnmounted(() => {
        ploc.unsubscribe(stateSubscription);
    });

    return readonly(state);
}
