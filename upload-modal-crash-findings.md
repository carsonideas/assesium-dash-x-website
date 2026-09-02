# Upload New Exam Paper modal crash findings

The shared sidebar opens the `import` modal through `openModal('import', { type: 'students', title: 'Upload New Exam Paper' })` in `ResponsiveLayout.tsx`.

`useModalStore.closeModal()` removes the closed modal key from `modalData`. `ModalProvider.tsx` then immediately renders the `ImportModal` with `modalData.import.type`, so closing the modal causes `modalData.import` to be undefined and throws `Cannot read properties of undefined (reading 'type')`.

The provider also passes `importType` while `ImportModal` expects `type`, so the modal receives an undefined import type while open. The fix should preserve default modal data on close and pass `type={modalData.import?.type || 'students'}`.
