use ic_cdk::query;

#[query]
fn greet(name: String) -> String {
    format!("Hello, {}!", name)
}

ic_cdk::export_candid!();
